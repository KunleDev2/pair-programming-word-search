const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    const verticalJoin = letters[0].map((_, i) => letters.map(row => row[i]).join(''));
    for (const l of verticalJoin) {
        if (l.includes(word)) return true;
    }

    return false;
}

module.exports = wordSearch