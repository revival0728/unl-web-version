import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function keyGenerator() {
    let elements = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let tmp = []
    for(let i = 0; i < elements.length; i++) {
        tmp.push(elements[i])
    }
    tmp.sort((a, b) => {
        if(Math.random() <= 0.5) {
            return -1
        } else {
            return 1
        }
    })
    return tmp.join('')
}

export default function Home() {
    const [key, setKey] = React.useState('')
    const [randomKey, setRandomKey] = React.useState('')

    return (
        <div>
            <div>
                <h1>歡迎來到加密和解密器</h1>
            </div>
            <div>
                <label htmlFor='keys'>輸入金鑰: </label>
                <input type='text' name='keys' id='keys'></input>
                <button type='submit' onClick={() => {
                    let key = document.getElementById('keys').value
                    setKey(key)
                }}>更新連結</button>
                <span id='director'>
                    <Link href={`/f/${key}/`}>點擊此連結進行加解密</Link>
                </span>
            </div>
            <div>
                <span>沒有金鑰? 按一下來生成!</span>
                <button type='submit' onClick={() => {
                        setRandomKey(keyGenerator())
                    }
                }>生成金鑰</button>
                <span id='random-keys'>{randomKey}</span>
            </div>
        </div>
    )
}
