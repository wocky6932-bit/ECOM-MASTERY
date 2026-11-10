"use client";

import React, { useState, useMemo } from "react";
import {
  TrendingUp,
  Users,
  CheckCircle2,
  Calendar,
  Eye,
  Filter,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";

export interface DayStat {
  date: string;
  label: string;
  fullDate: string;
  visitors: number;
  sales: number;
  revenue: number;
}

interface AdminConversionCurvesProps {
  data: DayStat[];
}

function getSmoothBezier(points: { x: number; y: number }[]): string {
  if (points.length === 0) return "";
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i === 0 ? 0 : i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2 < points.length ? i + 2 : i + 1];

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;

    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    d += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
  }
  return d;
}

export const AdminConversionCurves: React.FC<AdminConversionCurvesProps> = ({ data }) => {
  const [period, setPeriod] = useState<7 | 14 | 30>(7);
  const [showVisitors, setShowVisitors] = useState(true);
  const [showSales, setShowSales] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Filter data based on selected period
  const currentData = useMemo(() => {
    return data.slice(-period);
  }, [data, period]);

  // Totals for current period
  const totalVisitors = currentData.reduce((acc, d) => acc + d.visitors, 0);
  const totalSales = currentData.reduce((acc, d) => acc + d.sales, 0);
  const totalRevenue = currentData.reduce((acc, d) => acc + d.revenue, 0);
  const avgConversion = totalVisitors > 0 ? ((totalSales / totalVisitors) * 100).toFixed(1) : "0.0";

  // Dimensions of SVG canvas
  const svgWidth = 840;
  const svgHeight = 320;
  const paddingLeft = 50;
  const paddingRight = 30;
  const paddingTop = 30;
  const paddingBottom = 45;

  const chartWidth = svgWidth - paddingLeft - paddingRight;
  const chartHeight = svgHeight - paddingTop - paddingBottom;
  const bottomY = svgHeight - paddingBottom;

  // Max values for auto-scaling
  const maxVisitors = Math.max(...currentData.map((d) => d.visitors), 10);
  const maxSales = Math.max(...currentData.map((d) => d.sales), 5);

  // Scale Y to give both curves room to breathe
  const maxYVisitors = Math.ceil(maxVisitors * 1.15);
  const maxYSales = Math.max(Math.ceil(maxSales * 1.25), 4);

  // Calculate points coordinates
  const visitorPoints = useMemo(() => {
    return currentData.map((d, i) => {
      const x = paddingLeft + (i / Math.max(currentData.length - 1, 1)) * chartWidth;
      const y = bottomY - (d.visitors / maxYVisitors) * chartHeight;
      return { x, y, data: d };
    });
  }, [currentData, chartWidth, chartHeight, bottomY, maxYVisitors, paddingLeft]);

  const salesPoints = useMemo(() => {
    return currentData.map((d, i) => {
      const x = paddingLeft + (i / Math.max(currentData.length - 1, 1)) * chartWidth;
      const y = bottomY - (d.sales / maxYSales) * chartHeight;
      return { x, y, data: d };
    });
  }, [currentData, chartWidth, chartHeight, bottomY, maxYSales, paddingLeft]);

  // SVG Paths
  const visitorLinePath = useMemo(() => getSmoothBezier(visitorPoints), [visitorPoints]);
  const visitorAreaPath = useMemo(() => {
    if (visitorPoints.length === 0) return "";
    return `${visitorLinePath} L ${visitorPoints[visitorPoints.length - 1].x} ${bottomY} L ${visitorPoints[0].x} ${bottomY} Z`;
  }, [visitorLinePath, visitorPoints, bottomY]);

  const salesLinePath = useMemo(() => getSmoothBezier(salesPoints), [salesPoints]);
  const salesAreaPath = useMemo(() => {
    if (salesPoints.length === 0) return "";
    return `${salesLinePath} L ${salesPoints[salesPoints.length - 1].x} ${bottomY} L ${salesPoints[0].x} ${bottomY} Z`;
  }, [salesLinePath, salesPoints, bottomY]);

  const activeDataPoint = hoveredIndex !== null ? currentData[hoveredIndex] : currentData[currentData.length - 1];
  const activeVisitorPos = hoveredIndex !== null ? visitorPoints[hoveredIndex] : visitorPoints[visitorPoints.length - 1];
  const activeSalesPos = hoveredIndex !== null ? salesPoints[hoveredIndex] : salesPoints[salesPoints.length - 1];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
      {/* En-tête avec filtres de période et toggles */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-blue-50 text-[#0066FF]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Courbes d&apos;Évolution : Visiteurs entrés vs Livres achetés
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Surveillez les tendances d&apos;acquisition et les conversions au fil des jours.
              </p>
            </div>
          </div>
        </div>

        {/* Contrôles interactifs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* Sélecteur de période */}
          <div className="inline-flex items-center p-1 bg-slate-100 rounded-xl text-xs font-semibold text-slate-600">
            <button
              onClick={() => setPeriod(7)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                period === 7 ? "bg-white text-slate-900 shadow-sm" : "hover:text-slate-900"
              }`}
            >
              7 jours
            </button>
            <button
              onClick={() => setPeriod(14)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                period === 14 ? "bg-white text-slate-900 shadow-sm" : "hover:text-slate-900"
              }`}
            >
              14 jours
            </button>
            <button
              onClick={() => setPeriod(30)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                period === 30 ? "bg-white text-slate-900 shadow-sm" : "hover:text-slate-900"
              }`}
            >
              30 jours
            </button>
          </div>

          {/* Toggles de courbes */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
            <button
              onClick={() => setShowVisitors(!showVisitors)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                showVisitors
                  ? "bg-blue-50 border-blue-200 text-[#0066FF]"
                  : "bg-slate-50 border-slate-200 text-slate-400 opacity-60"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
              <span>Visiteurs</span>
            </button>
            <button
              onClick={() => setShowSales(!showSales)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                showSales
                  ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                  : "bg-slate-50 border-slate-200 text-slate-400 opacity-60"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>Ventes</span>
            </button>
          </div>
        </div>
      </div>

      {/* Cartes résumé sur la période sélectionnée */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
            Visiteurs ({period}j)
          </span>
          <div className="text-xl font-black text-slate-900 mt-1">
            {totalVisitors.toLocaleString("fr-FR")}
          </div>
          <span className="text-[11px] text-[#0066FF] font-medium flex items-center gap-0.5 mt-0.5">
            Moy. {Math.round(totalVisitors / period)} / jour
          </span>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
            Livres vendus ({period}j)
          </span>
          <div className="text-xl font-black text-emerald-700 mt-1">
            {totalSales.toLocaleString("fr-FR")}
          </div>
          <span className="text-[11px] text-emerald-600 font-medium flex items-center gap-0.5 mt-0.5">
            {totalRevenue.toLocaleString("fr-FR")} FCFA
          </span>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
            Conversion moyenne
          </span>
          <div className="text-xl font-black text-slate-900 mt-1">
            {avgConversion} %
          </div>
          <span className="text-[11px] text-slate-500 font-medium mt-0.5 block">
            Acheteurs / Visiteurs
          </span>
        </div>

        <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100">
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500 block">
            Point d&apos;intérêt
          </span>
          <div className="text-xs font-bold text-slate-800 mt-1 truncate">
            {activeDataPoint?.fullDate || "Aujourd'hui"}
          </div>
          <span className="text-[11px] text-slate-600 font-medium mt-0.5 block">
            {activeDataPoint ? `${activeDataPoint.visitors} vis. · ${activeDataPoint.sales} vente(s)` : "-"}
          </span>
        </div>
      </div>

      {/* Zone du Graphique SVG Interactif */}
      <div className="relative w-full overflow-hidden select-none bg-gradient-to-b from-slate-50/50 to-white rounded-2xl border border-slate-100 p-2 sm:p-4">
        
        {/* Légende rapide */}
        <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 px-2 pb-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-blue-600 font-semibold">
              <span className="w-2.5 h-1 bg-[#0066FF] rounded-full" />
              Courbe bleue : Visiteurs entrés (Échelle gauche)
            </span>
            <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold">
              <span className="w-2.5 h-1 bg-[#10B981] rounded-full" />
              Courbe verte : Livres achetés (Échelle droite)
            </span>
          </div>
          <span className="hidden sm:inline text-slate-400">Survolez un point pour inspecter la journée</span>
        </div>

        <div className="relative w-full aspect-[21/9] min-h-[260px] max-h-[360px]">
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full h-full overflow-visible"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <defs>
              {/* Dégradé courbe Visiteurs */}
              <linearGradient id="visitorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0066FF" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#0066FF" stopOpacity="0.0" />
              </linearGradient>

              {/* Dégradé courbe Ventes */}
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.30" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
              </linearGradient>

              {/* Filtre ombre pour les lignes */}
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.15" />
              </filter>
            </defs>

            {/* Lignes de repère horizontales (grille en pointillés) */}
            {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
              const y = bottomY - ratio * chartHeight;
              const visitorVal = Math.round(ratio * maxYVisitors);
              const salesVal = Math.round(ratio * maxYSales);
              return (
                <g key={ratio}>
                  <line
                    x1={paddingLeft}
                    y1={y}
                    x2={svgWidth - paddingRight}
                    y2={y}
                    stroke="#E2E8F0"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  {/* Valeur échelle gauche (Visiteurs) */}
                  <text
                    x={paddingLeft - 8}
                    y={y + 3.5}
                    textAnchor="end"
                    className="text-[9px] fill-slate-400 font-mono"
                  >
                    {visitorVal}
                  </text>
                  {/* Valeur échelle droite (Ventes) */}
                  <text
                    x={svgWidth - paddingRight + 8}
                    y={y + 3.5}
                    textAnchor="start"
                    className="text-[9px] fill-emerald-600 font-mono font-bold"
                  >
                    {salesVal}
                  </text>
                </g>
              );
            })}

            {/* Surface dégradée et Courbe Visiteurs */}
            {showVisitors && (
              <g>
                <path d={visitorAreaPath} fill="url(#visitorGradient)" />
                <path
                  d={visitorLinePath}
                  fill="none"
                  stroke="#0066FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#glow)"
                />
              </g>
            )}

            {/* Surface dégradée et Courbe Ventes */}
            {showSales && (
              <g>
                <path d={salesAreaPath} fill="url(#salesGradient)" />
                <path
                  d={salesLinePath}
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#glow)"
                />
              </g>
            )}

            {/* Axe X (Labels des jours) */}
            {currentData.map((d, i) => {
              const x = paddingLeft + (i / Math.max(currentData.length - 1, 1)) * chartWidth;
              // En mode 30 jours, afficher 1 label sur 3 pour éviter la superposition
              const shouldShowLabel = period === 7 || (period === 14 && i % 2 === 0) || (period === 30 && i % 4 === 0) || i === currentData.length - 1;
              if (!shouldShowLabel) return null;

              return (
                <text
                  key={d.date}
                  x={x}
                  y={bottomY + 20}
                  textAnchor="middle"
                  className={`text-[10px] font-semibold uppercase ${
                    hoveredIndex === i ? "fill-slate-900 font-bold" : "fill-slate-400"
                  }`}
                >
                  {d.label}
                </text>
              );
            })}

            {/* Zones de capture de la souris (colonnes verticales invisibles) */}
            {currentData.map((d, i) => {
              const x = paddingLeft + (i / Math.max(currentData.length - 1, 1)) * chartWidth;
              const colWidth = chartWidth / Math.max(currentData.length - 1, 1);
              return (
                <rect
                  key={`hitbox-${d.date}`}
                  x={x - colWidth / 2}
                  y={paddingTop}
                  width={colWidth}
                  height={chartHeight + 20}
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(i)}
                />
              );
            })}

            {/* Curseur vertical interactif et points au survol */}
            {hoveredIndex !== null && (
              <g>
                {/* Ligne verticale de repère */}
                <line
                  x1={activeVisitorPos.x}
                  y1={paddingTop}
                  x2={activeVisitorPos.x}
                  y2={bottomY}
                  stroke="#64748B"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />

                {/* Point de repère Visiteurs */}
                {showVisitors && (
                  <g>
                    <circle
                      cx={activeVisitorPos.x}
                      cy={activeVisitorPos.y}
                      r="7"
                      fill="#0066FF"
                      fillOpacity="0.2"
                    />
                    <circle
                      cx={activeVisitorPos.x}
                      cy={activeVisitorPos.y}
                      r="4"
                      fill="#0066FF"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                  </g>
                )}

                {/* Point de repère Ventes */}
                {showSales && (
                  <g>
                    <circle
                      cx={activeSalesPos.x}
                      cy={activeSalesPos.y}
                      r="8"
                      fill="#10B981"
                      fillOpacity="0.25"
                    />
                    <circle
                      cx={activeSalesPos.x}
                      cy={activeSalesPos.y}
                      r="4.5"
                      fill="#10B981"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                  </g>
                )}
              </g>
            )}
          </svg>

          {/* Infobulle Dynamique (HTML Tooltip Positionné au-dessus de la courbe) */}
          {hoveredIndex !== null && activeDataPoint && (
            <div
              className="absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-full transition-all duration-150"
              style={{
                left: `${(activeVisitorPos.x / svgWidth) * 100}%`,
                top: `${Math.min(activeVisitorPos.y, activeSalesPos.y) - 15}px`,
              }}
            >
              <div className="bg-[#070F1E] text-white p-3 rounded-2xl shadow-2xl border border-white/10 text-xs w-48 space-y-1.5">
                <div className="font-bold text-slate-200 border-b border-white/10 pb-1 text-[11px] flex justify-between items-center">
                  <span>{activeDataPoint.fullDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-blue-300">
                    <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
                    Visiteurs
                  </span>
                  <span className="font-mono font-bold text-white">
                    {activeDataPoint.visitors}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    Livres achetés
                  </span>
                  <span className="font-mono font-bold text-white">
                    {activeDataPoint.sales}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[10px]">
                  <span className="text-slate-400">Conversion</span>
                  <span className="font-mono font-bold text-amber-400">
                    {activeDataPoint.visitors > 0
                      ? ((activeDataPoint.sales / activeDataPoint.visitors) * 100).toFixed(1)
                      : "0"}%
                  </span>
                </div>
                {activeDataPoint.revenue > 0 && (
                  <div className="text-[10px] text-emerald-400 font-semibold text-right">
                    +{activeDataPoint.revenue.toLocaleString("fr-FR")} FCFA
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
