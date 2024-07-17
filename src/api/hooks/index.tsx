interface OcrProps {
    arquivo: string;
}

export const postOcrRequest = async (payload: OcrProps): Promise<void> => {
    try {
        const res = await fetch(`/arquivo/recebimento`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            throw new Error('erro');
        }

        const data = await res.json();
        console.log(data);

    } catch (error) {
        console.error('Fetch error:', error);
    }
};
