import React from 'react'

export default function ItemFaq({sumario,resposta}) {
  return (
    <>
    <details class="w-full rounded-lg border bg-slate-200 p-4 shadow-lg">
    <summary class="text-xl font-semibold">
        {sumario}
    </summary>
    <div class="mt-2 rounded-md border bg-slate-300 p-4">
        {resposta}
    </div>
</details>
    </>
  )
}
