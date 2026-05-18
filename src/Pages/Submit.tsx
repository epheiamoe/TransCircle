import { useState } from 'react'

export default function Submit() {
  const [title, setTitle] = useState('')

  const [content, setContent] = useState('')

  async function submit() {
    await fetch('/api/submit', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        title,
        content,
      }),
    })

    alert('投稿成功')
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>投稿</h1>

      <div>
        <input
          placeholder="标题"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />
      </div>

      <div>
        <textarea
          placeholder="内容"
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
          rows={10}
          cols={50}
        />
      </div>

      <button onClick={submit}>
        提交
      </button>
    </div>
  )
}