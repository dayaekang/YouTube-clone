import React, { useEffect, useState } from 'react';
import { FaYoutube, FaSearch } from 'react-icons/fa';
import {Link, useNavigate, useParams} from 'react-router-dom';

export default function Header() {
    const {keyword} = useParams();
     //뒤로가기 눌렀을 때 바뀐 history keyword에 맞게 검색창 text도 바꾸기위해서

    const [text, setText] = useState('');

    const navigate = useNavigate();

    const handleSumbmit = (e) =>{
        e.preventDefault();
        if(!text) return;
        navigate(`/videos/${text}`);
    }

    useEffect(()=> setText(keyword || ''), [keyword]) //keyword바뀔 때 마다 설정해주기

    return (
       <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
        <Link to={'/'} className='flex items-center'>
            <FaYoutube className='text-4xl text-brand'/>
            <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
        </Link>

        <form onSubmit={handleSumbmit} className='w-full flex justify-center'>
            <input
            className='w-7/12 p-2 outline-none bg-black text-gray-50'
             type="text"
             placeholder='Search...'
             value={text}
             onChange={(e)=>  setText(e.target.value)}
             />
            <button className='bg-zinc-600 px-4'><FaSearch/></button>
        </form>
       </header>
    );
}

