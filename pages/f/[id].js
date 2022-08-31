import { useRouter } from "next/router"
import { encrypt, decrypt } from "../../lib/edcrypt"

function clickEncrypt(key) {
    let str = document.getElementById('input').value
    str = encrypt(key, str)
    document.getElementById('output').value = str
}

function clickDecrypt(key) {
    let str = document.getElementById('input').value
    str = decrypt(key, str)
    document.getElementById('output').value = str
}

export default function F() {
    const router = useRouter()
    const key = router.query.id

    return (
        <div>
            <div>
                <span>輸入</span>
                <textarea id='input'></textarea>
                <button onClick={() => {clickEncrypt(key)}}>加密</button>
                <button onClick={() => {clickDecrypt(key)}}>解密</button>
            </div>
            <div>
                <span>輸出</span>
                <textarea id='output'></textarea>
            </div>
        </div>
    )
}