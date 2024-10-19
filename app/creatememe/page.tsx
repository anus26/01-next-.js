'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image';

interface Meme {
    id: string;
    url: string;
    box_count: number;


}
const Creatememe = ({ searchParams }: { searchParams: Meme }) => {
    console.log(searchParams);

    
    const [meme, setMeme] = useState<string | null>(null)
    // const text1 = useRef<HTMLInputElement>(null)
    // const text2 = useRef<HTMLInputElement>(null)
    const textInputs = useRef<(HTMLInputElement | null)[]>([])



    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // console.log(text1.current?.value);
        // console.log(text2.current?.value);

        const filledInputs = textInputs.current.map(input => input?.value || '')
        const boxesParams = filledInputs
            .map((text, index) => `text${index}=${encodeURIComponent(text)}`)
            .join('&')
        // const data=await fetch(`https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=AnusRaza&password=321qadri&text0=${text1.current?.value}&text1=${text2.current?.value}`

        const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=AnusRaza&password=321qadri&${boxesParams}`,
            {
                method: 'Post'

            })
        const response = await data.json()
        console.log(response);
        setMeme(response.data.url)
        

    }

    // const getInputs = () => {
    //     const inputs = [];
    //     for (let i: number = 0; i < searchParams.box_count; i++) {
    //         inputs.push(<input key={i} placeholder={`Text ${i + 1}`} />);
    //         ref={el =>textInputs.current[index]=el}
    //     }
    //     return inputs
    // }
    const getInputs = () => {
        return Array.from({ length: searchParams.box_count }).map((_, index) => (
            <input
                key={index}
                placeholder={`Text ${index + 1}`}
                ref={(el) =>{ textInputs.current[index] = el}}
            />
        ));
        
    }

    return (
        <>
            <h1>creatememe</h1>
            <Image src={searchParams.url} width={200} height={200} alt='meme' />
            <div>
                <form onSubmit={handleSubmit}>
                    {/* {Array.from({length:searchParams.box_count}).map((_, index)=>(
<input type="text" key={index}  placeholder={`Text ${index+1}` } ref={queryParams}/>
                ))} */}
                {getInputs()}
                    <button type='submit'>create meme</button>

                </form>
            </div>
            {meme ? <Image src={meme} width={200} height={200} alt='meme' /> : null}
        </>
    )
}

export default Creatememe
