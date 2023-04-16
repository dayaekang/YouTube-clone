import { format, register  } from 'timeago.js';
import koLocal from 'timeago.js/lib/lang/ko';


register('ko', koLocal) //한국어를 koLocal에 등록, ko원할 때만 넣어주기

export  function formatAgo(date, lang='en_US'){
    return format(date, lang); 
}