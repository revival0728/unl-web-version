const elements = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

export function encrypt(key, str) {
    let makeSheet = () => {
        let sheet = []
        for(let i = 0; i < elements.length; i++) {
            let line = {}
            for(let j = 0; j < key.length; ++j) {
                line[elements[j]] = key[(j+i) % key.length]
            }
            sheet.push(line)
        }
        return sheet
    }
    let sheet = makeSheet()
    let ret = ''
    for(let i = 0; i < str.length; ++i) {
        if(elements.includes(str[i]))
            ret += sheet[i % sheet.length][str[i]]
        else
            ret += str[i];
    }
    return ret
}

export function decrypt(key, str) {
    let makeSheet = () => {
        let sheet = []
        for(let i = 0; i < elements.length; i++) {
            let line = {}
            for(let j = 0; j < key.length; ++j) {
                line[elements[i]] = key[(j+i) % key.length]
                line[key[(j+i) % key.length]] = elements[i]
            }
            sheet.push(line)
        }
        return sheet
    }
    let sheet = makeSheet()
    let ret = ''
    for(let i = 0; i < str.length; ++i) {
        if(elements.includes(str[i]))
            ret += sheet[(i + sheet.length) % sheet.length][str[i]]
        else
            ret += str[i];
    }
    return ret
}
