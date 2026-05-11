import os
import json

wordkit_seo_data = {
    "unscramble-tool.html": {
        "title": "Word Unscrambler",
        "desc": "Free word unscrambler to unscramble letters into words. Perfect for Scrabble, Wordle, and Words with Friends.",
        "article": """
<article style="max-width:800px; margin: 4rem auto; padding: 0 2rem; color: var(--ink2); line-height: 1.8; font-size: 15px;">
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">What is a Word Unscrambler?</h2>
  <p style="margin-bottom: 1.5rem;">A word unscrambler is a digital tool designed to take a jumbled set of letters and rearrange them into valid, playable English words. Whether you are stuck on a difficult level of Words with Friends, trying to find a high-scoring play in Scrabble, or solving an anagram puzzle in the Sunday newspaper, this tool instantly searches the dictionary to give you every possible combination.</p>
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">How to Use the Word Unscrambler</h2>
  <p style="margin-bottom: 1.5rem;">Simply enter your rack of letters (up to 15 characters) into the search bar. If you have blank tiles, you can use the '?' symbol as a wildcard. The unscrambler will process your letters and output a categorized list of words sorted by length and point value, helping you find the absolute best move to crush your opponent.</p>
</article>
"""
    },
    "anagram-tool.html": {
        "title": "Anagram Finder",
        "desc": "Find all anagrams for any given word instantly. Discover hidden words and solve anagram puzzles.",
        "article": """
<article style="max-width:800px; margin: 4rem auto; padding: 0 2rem; color: var(--ink2); line-height: 1.8; font-size: 15px;">
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">What is an Anagram?</h2>
  <p style="margin-bottom: 1.5rem;">An anagram is a word or phrase formed by completely rearranging the letters of a different word or phrase, using all the original letters exactly once. For example, the word 'LISTEN' can be rearranged to spell 'SILENT', 'ENLIST', or 'TINSEL'. Anagrams have been used for centuries in literature, cryptography, and puzzle-solving.</p>
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">How the Anagram Finder Works</h2>
  <p style="margin-bottom: 1.5rem;">Our Anagram Finder takes any word you input and cross-references it against a comprehensive English dictionary. Unlike a standard unscrambler that finds words of varying lengths, a true anagram solver finds words that use <em>every single letter</em> you provide. It is the ultimate tool for decoding cryptic crosswords, solving word jumbles, or discovering secret messages hidden within names.</p>
</article>
"""
    },
    "rhyme-tool.html": {
        "title": "Rhyme Finder",
        "desc": "Find perfect rhymes, near rhymes, and slant rhymes for any word. The best rhyming dictionary for poets and songwriters.",
        "article": """
<article style="max-width:800px; margin: 4rem auto; padding: 0 2rem; color: var(--ink2); line-height: 1.8; font-size: 15px;">
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">The Ultimate Rhyming Dictionary</h2>
  <p style="margin-bottom: 1.5rem;">Writing a song, poem, or rap requires a strong vocabulary and a deep understanding of phonetics. A rhyming dictionary takes the frustration out of writer's block by instantly providing words that sound similar to your target word. Whether you need a perfect rhyme to end a couplet or a slant rhyme to keep a modern flow, our Rhyme Finder categorizes results by syllable count and rhyme type.</p>
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">Perfect Rhymes vs. Slant Rhymes</h2>
  <p style="margin-bottom: 1.5rem;">A <strong>perfect rhyme</strong> occurs when the final stressed vowel and all subsequent sounds are identical (e.g., Cat / Hat). A <strong>slant rhyme</strong> (or near rhyme) involves words with similar but not identical sounds (e.g., Shape / Keep). Modern songwriters heavily rely on slant rhymes to keep their lyrics unpredictable and emotionally resonant.</p>
</article>
"""
    },
    "wordle-tool.html": {
        "title": "Wordle Helper",
        "desc": "Solve today's Wordle puzzle instantly. Enter your green, yellow, and grey letters to find the exact answer.",
        "article": """
<article style="max-width:800px; margin: 4rem auto; padding: 0 2rem; color: var(--ink2); line-height: 1.8; font-size: 15px;">
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">Never Lose Your Wordle Streak Again</h2>
  <p style="margin-bottom: 1.5rem;">Wordle is a daily word puzzle that gives players six attempts to guess a hidden five-letter word. While it starts out easy, finding the right combination of letters when you only have one yellow tile and four grey tiles can be incredibly frustrating. The Wordle Helper acts as an intelligent solver that narrows down the dictionary based on your exact grid constraints.</p>
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">How to Use the Wordle Solver</h2>
  <p style="margin-bottom: 1.5rem;">To use this tool, simply replicate your Wordle board. Click the tiles to match the colors of your guess: Green for letters in the correct spot, Yellow for letters in the word but in the wrong spot, and Grey for eliminated letters. Once you input your clues, the solver instantly provides a list of remaining possible answers, allowing you to secure your win without breaking a sweat.</p>
</article>
"""
    },
    "crossword-tool.html": {
        "title": "Free Online Crossword Puzzle",
        "desc": "Play free online daily crossword puzzles. Test your trivia and vocabulary skills with our interactive grid.",
        "article": """
<article style="max-width:800px; margin: 4rem auto; padding: 0 2rem; color: var(--ink2); line-height: 1.8; font-size: 15px;">
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">Play Free Mini Crossword Puzzles</h2>
  <p style="margin-bottom: 1.5rem;">Crossword puzzles are one of the oldest and most beloved daily brain exercises. Originally popularized in newspapers, modern digital crosswords allow you to test your general knowledge, pop culture trivia, and vocabulary right from your browser. Our free online crossword puzzle updates with fresh grids to keep your mind sharp.</p>
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">Why Play Crosswords?</h2>
  <p style="margin-bottom: 1.5rem;">Regularly solving crossword puzzles has been scientifically linked to improved cognitive function and a delay in memory decline. Not only do they force you to think outside the box to interpret clever clues, but they also introduce you to new vocabulary words daily. Use our 'Reveal' and 'Check' features if you get stuck!</p>
</article>
"""
    },
    "wordsearch-tool.html": {
        "title": "Online Word Search Puzzle",
        "desc": "Play free online word search games. Find hidden words in the letter grid across multiple fun categories.",
        "article": """
<article style="max-width:800px; margin: 4rem auto; padding: 0 2rem; color: var(--ink2); line-height: 1.8; font-size: 15px;">
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">Classic Word Search Games Online</h2>
  <p style="margin-bottom: 1.5rem;">Word searches are relaxing, visually engaging puzzles where the objective is to find a specific list of words hidden within a grid of scrambled letters. The words can be placed horizontally, vertically, or diagonally, and can even be spelled backward. Our free digital word search lets you play instantly without needing a pen and paper.</p>
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">Themes and Categories</h2>
  <p style="margin-bottom: 1.5rem;">To keep things interesting, our word search generator offers multiple themed categories such as Animals, Countries, Sports, and Fruits. Playing themed word searches is an excellent educational tool for children learning to read, and a therapeutic, low-stress brain game for adults unwinding after a long day.</p>
</article>
"""
    },
    "hangman-tool.html": {
        "title": "Play Hangman Online",
        "desc": "Play the classic Hangman word game online for free. Guess the letters before the stickman is drawn.",
        "article": """
<article style="max-width:800px; margin: 4rem auto; padding: 0 2rem; color: var(--ink2); line-height: 1.8; font-size: 15px;">
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">The Classic Game of Hangman</h2>
  <p style="margin-bottom: 1.5rem;">Hangman is a timeless word-guessing game that has entertained students and puzzle lovers for generations. The rules are simple: you must guess a hidden word one letter at a time. However, for every incorrect guess, a part of a stick figure is drawn. If the drawing is completed before you guess the word, you lose the game.</p>
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">Strategies to Win at Hangman</h2>
  <p style="margin-bottom: 1.5rem;">The secret to winning Hangman consistently is understanding letter frequency in the English language. Always start by guessing common vowels like 'E', 'A', and 'I' to reveal the structure of the word. Once the vowels are placed, move on to the most common consonants like 'S', 'T', 'R', and 'N'. Avoid guessing rare letters like 'Z' or 'Q' unless the visible clues strongly suggest them!</p>
</article>
"""
    },
    "wordleplay-tool.html": {
        "title": "Daily Word Game",
        "desc": "Play a free daily 5-letter word guessing game. Test your logic and vocabulary with a new puzzle every day.",
        "article": """
<article style="max-width:800px; margin: 4rem auto; padding: 0 2rem; color: var(--ink2); line-height: 1.8; font-size: 15px;">
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">Your Daily 5-Letter Word Challenge</h2>
  <p style="margin-bottom: 1.5rem;">Dive into our free daily word puzzle! The goal is beautifully simple: guess the secret 5-letter word within six attempts. After every guess, the color of the tiles will change to show how close you are to the answer. It is a fantastic daily ritual to stimulate your brain over morning coffee.</p>
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">Color Clues Explained</h2>
  <p style="margin-bottom: 1.5rem;">If a tile turns <strong>Green</strong>, you have guessed the right letter in the right spot. If it turns <strong>Yellow</strong>, the letter is in the secret word, but currently in the wrong position. A <strong>Grey</strong> tile means the letter does not appear in the word at all. Use these logical clues to eliminate possibilities and secure your daily victory!</p>
</article>
"""
    },
    "spellingbee-tool.html": {
        "title": "Spelling Bee Solver",
        "desc": "Find all valid words for today's Spelling Bee puzzle. Get pangrams and boost your rank to Genius.",
        "article": """
<article style="max-width:800px; margin: 4rem auto; padding: 0 2rem; color: var(--ink2); line-height: 1.8; font-size: 15px;">
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">Master the Spelling Bee Puzzle</h2>
  <p style="margin-bottom: 1.5rem;">The Spelling Bee is a highly addictive word game where players are given a honeycomb of seven letters and challenged to create as many words as possible. The catch? Every word must contain the central letter, and words must be at least four letters long. Our Spelling Bee Solver helps you find those elusive missing words to reach the coveted 'Genius' rank.</p>
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">What is a Pangram?</h2>
  <p style="margin-bottom: 1.5rem;">In the context of the Spelling Bee, a 'Pangram' is a special word that utilizes every single one of the seven letters provided in the puzzle at least once. Finding the pangram awards a massive point bonus. Our tool specifically highlights pangrams so you can maximize your daily score instantly.</p>
</article>
"""
    },
    "scrabble-tool.html": {
        "title": "Scrabble Word Finder",
        "desc": "Maximize your Scrabble score. Enter your rack letters to find the highest scoring words instantly.",
        "article": """
<article style="max-width:800px; margin: 4rem auto; padding: 0 2rem; color: var(--ink2); line-height: 1.8; font-size: 15px;">
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">The Ultimate Scrabble Cheat Board</h2>
  <p style="margin-bottom: 1.5rem;">Scrabble is a classic board game that blends vocabulary with mathematical strategy. Sometimes, you draw a rack full of vowels or awkward consonants (like Q, Z, and J) and find yourself entirely stuck. Our Scrabble Word Finder allows you to input your exact rack—including blank tiles—and generates a sorted list of the highest-scoring legal plays.</p>
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">Strategy Tips for High Scores</h2>
  <p style="margin-bottom: 1.5rem;">Winning at Scrabble isn't just about knowing long words; it's about board placement and maximizing tile values. Learn to memorize valid 2-letter words (like ZA, QI, and XI) to hook your high-value tiles onto existing words. Additionally, always aim for a 'Bingo'—using all seven letters on your rack in a single turn—which grants a massive 50-point bonus!</p>
</article>
"""
    },
    "wordladder-tool.html": {
        "title": "Word Ladder Solver",
        "desc": "Solve Word Ladder puzzles instantly. Find the shortest path from the start word to the target word.",
        "article": """
<article style="max-width:800px; margin: 4rem auto; padding: 0 2rem; color: var(--ink2); line-height: 1.8; font-size: 15px;">
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">What is a Word Ladder?</h2>
  <p style="margin-bottom: 1.5rem;">Invented by the famous author Lewis Carroll, a Word Ladder is a puzzle where you must transform a starting word into a target word by changing exactly one letter at a time. The challenge is that every intermediate step must also be a valid English word. For example, transforming COLD to WARM might look like: COLD → CORD → CARD → WARD → WARM.</p>
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">Using the Word Ladder Solver</h2>
  <p style="margin-bottom: 1.5rem;">Sometimes a word ladder puzzle can stump even the best linguistic minds. Our Word Ladder Solver uses advanced pathfinding algorithms to analyze the dictionary and compute the absolute shortest possible chain between your start and end words. It's the perfect tool for getting unstuck or generating new puzzles for friends.</p>
</article>
"""
    },
    "random-tool.html": {
        "title": "Random Word Generator",
        "desc": "Generate random English words for Pictionary, writing prompts, brainstorming, and games.",
        "article": """
<article style="max-width:800px; margin: 4rem auto; padding: 0 2rem; color: var(--ink2); line-height: 1.8; font-size: 15px;">
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">Creative Brainstorming with Random Words</h2>
  <p style="margin-bottom: 1.5rem;">A random word generator is a highly versatile tool used by writers, educators, and game designers. When facing creative block, forcing your brain to connect two entirely random concepts can spark brilliant new ideas. It is an excellent resource for generating daily writing prompts, improvisational acting scenarios, or conceptualizing a new startup name.</p>
  <h2 style="font-family: 'Playfair Display', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">Perfect for Party Games</h2>
  <p style="margin-bottom: 1.5rem;">Are you hosting a game night? You can use this tool to instantly generate words for Pictionary, Charades, or Catchphrase. You can customize the output by specifying the exact number of words you need, restricting the word length, or filtering by starting letters to adjust the difficulty level on the fly.</p>
</article>
"""
    }
}

base_dir = "WordKit"

for filename, data in wordkit_seo_data.items():
    filepath = os.path.join(base_dir, filename)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            html = f.read()

        changed = False

        # 1. Inject JSON-LD Schema in the <head>
        schema = {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": data["title"],
            "url": f"https://wordkitapp.com/{filename.replace('.html', '')}",
            "description": data["desc"],
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "All"
        }
        schema_script = f'\\n<script type="application/ld+json">\\n{json.dumps(schema, indent=2)}\\n</script>\\n</head>'
        
        if '<script type="application/ld+json">' not in html:
            html = html.replace('</head>', schema_script)
            changed = True

        # 2. Inject <article> content right before <footer>
        if '<footer>' in html and '<article style="max-width:800px;' not in html:
            html = html.replace('<footer>', data["article"] + '\\n<footer>')
            changed = True

        if changed:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(html)
            print(f"Injected SEO into {filename}")
        else:
            print(f"Skipped {filename} (already injected)")
    else:
        print(f"File not found: {filepath}")
