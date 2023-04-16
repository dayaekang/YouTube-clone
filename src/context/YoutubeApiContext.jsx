import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
// import FakeYoutube from '../api/FakeYoutube';


export const YoutubeApiContext = createContext();

const youtube = new Youtube();

export function YoutubeApiProvider({children}){

    return <YoutubeApiContext.Provider value={{youtube}}>{children}</YoutubeApiContext.Provider>
    //value => 자식 컴포넌트와 공유하고싶은 데이터  -> youtube 인스턴스를 제공
}

export function useYoutubeApi(){
    return useContext(YoutubeApiContext)
}