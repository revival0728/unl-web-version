import Link from 'next/link'

export default function Note() {
    return (
        <div>
            <h1>請先輸入金鑰並刷新再點擊連結</h1>
            <Link href='/'>返回上一頁</Link>
        </div>
    )
}