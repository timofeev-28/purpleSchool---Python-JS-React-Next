'use client'

export default function Error({
	reset
}: { error: Error, reset: () => void }) {
	return <>
		<div>Не удалось загрузить данные...</div>
		<button onClick={() => reset()}>Попробовать ещё раз</button>
	</>
}
