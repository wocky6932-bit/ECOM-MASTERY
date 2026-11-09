import re

emoji_pattern = re.compile(
    r'[\U00010000-\U0010ffff\u2600-\u26ff\u2700-\u27bf\ufe0f\u200d]'
)

with open('src/lib/seed-data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace specific emoji patterns with elegant text
replacements = [
    ('> 💡 **', '> **Conseil : '),
    ('> 💡', '> **Conseil :**'),
    ('> 📌 **', '> **À retenir : '),
    ('> 📌', '> **À retenir :**'),
    ('> ⚠️ **', '> **Attention : '),
    ('> ⚠️', '> **Attention :**'),
    ('✅ **', '- **'),
    ('✅', '- Validé :'),
    ('❌ **', '- **À éviter : '),
    ('❌', '- Déconseillé :'),
    ('🚀', ''),
    ('🚢', ''),
    ('🌟', ''),
    ('✨', ''),
    ('📦', ''),
    ('🎯', ''),
    ('💬', ''),
    ('📱', ''),
    ('🔄', ''),
    ('⚡', ''),
    ('📎', ''),
    ('🔒', ''),
    ('⭐', ''),
]

for old, new in replacements:
    content = content.replace(old, new)

# Strip any remaining emojis
clean_content = emoji_pattern.sub('', content)

# Remove double spaces that might result from stripping emojis
clean_content = re.sub(r' +', ' ', clean_content)
# Restore standard indentation
clean_content = re.sub(r'\n +', lambda m: '\n' + ' ' * (len(m.group(0)) - 1), clean_content)

with open('src/lib/seed-data.ts', 'w', encoding='utf-8') as f:
    f.write(clean_content)

print("Cleaned emojis from src/lib/seed-data.ts successfully!")
