let realCoins_mainContainer=document.querySelector('.realCoins_mainContainer');
let realCoins_mainContainer_body=document.querySelector('.realCoins_mainContainer_body');



let realCoins_mainContainer_home=document.querySelector('.realCoins_mainContainer_home');
let realCoins_mainContainer_x2=document.querySelector('.realCoins_mainContainer_x2');
let realCoins_mainContainer_boost=document.querySelector('.realCoins_mainContainer_boost');
let realCoins_mainContainer_earn=document.querySelector('.realCoins_mainContainer_earn');
let realCoins_mainContainer_bobols=document.querySelector('.realCoins_mainContainer_bobols');
let realCoins_mainContainer_dailyCipher=document.querySelector('.realCoins_mainContainer_dailyCipher');
let realCoins_mainContainer_ref=document.querySelector('.realCoins_mainContainer_ref');



let realCoins_mainContainer_x2TopDiv=document.querySelector('.realCoins_mainContainer_x2TopDiv');
let realCoins_mainContainer_x2BottomDiv=document.querySelector('.realCoins_mainContainer_x2BottomDiv');




if(localStorage.getItem('displayCoins')===null){
    localStorage.setItem('displayCoins',0)
    localStorage.setItem('coinsCount',0)
}










if(screen.height<740){
    
    //CHANGE THE SIZE OF realCoins_mainContainer MATCH
    realCoins_mainContainer.style.height=`${screen.height}px`;
    realCoins_mainContainer_body.style.height=`${screen.height-200}px`;
    realCoins_mainContainer_home.style.height=`${screen.height-200}px`;
    realCoins_mainContainer_x2.style.height=`${screen.height-200}px`;
    realCoins_mainContainer_boost.style.height=`${screen.height-200}px`;realCoins_mainContainer_earn.style.height=`${screen.height-200}px`;
    realCoins_mainContainer_bobols.style.height=`${screen.height-200}px`;
    realCoins_mainContainer_dailyCipher.style.height=`${screen.height-200}px`;
    realCoins_mainContainer_ref.style.height=`${screen.height-200}px`;

    realCoins_mainContainer_x2TopDiv.style.height=`${(screen.height-200-28)/3}px`;
    realCoins_mainContainer_x2BottomDiv.style.height=`${((screen.height-200-20)-((screen.height-200-20)/3)-50)-15}px`;

}else{

    //CHANGE THE SIZE OF realCoins_mainContainer MATCH
    realCoins_mainContainer.style.height=`${screen.height-185}px`;
    realCoins_mainContainer_body.style.height=`${screen.height-200-185}px`;
    realCoins_mainContainer_home.style.height=`${screen.height-200-185}px`;
    realCoins_mainContainer_x2.style.height=`${screen.height-200-185}px`;
    realCoins_mainContainer_boost.style.height=`${screen.height-200-185}px`;realCoins_mainContainer_earn.style.height=`${screen.height-200-185}px`;
    realCoins_mainContainer_bobols.style.height=`${screen.height-200-185}px`;
    realCoins_mainContainer_dailyCipher.style.height=`${screen.height-200-185}px`;
    realCoins_mainContainer_ref.style.height=`${screen.height-200-185}px`;

    realCoins_mainContainer_x2TopDiv.style.height=`${(screen.height-200-185-28)/3}px`;
    realCoins_mainContainer_x2BottomDiv.style.height=`${((screen.height-200-185-20)-((screen.height-200-185-20)/3)-50)-15}px`;

}








if(screen.width<330){
    realCoins_mainContainer_x2TopDiv.style.gridTemplateColumns=" 1fr 1fr";
    realCoins_mainContainer_x2BottomDiv.style.gridTemplateColumns=" 1fr 1fr";
    
}else if(screen.width>330 && screen.width<540){
    realCoins_mainContainer_x2TopDiv.style.gridTemplateColumns=" 1fr 1fr 1fr";
    realCoins_mainContainer_x2BottomDiv.style.gridTemplateColumns=" 1fr 1fr 1fr";

}else if(screen.width>540 && screen.width<750){
    realCoins_mainContainer_x2TopDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr";
    realCoins_mainContainer_x2BottomDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr";

}else if(screen.width>750 && screen.width<900){
    realCoins_mainContainer_x2TopDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr 1fr";
    realCoins_mainContainer_x2BottomDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr 1fr";

}else if(screen.width>900){
    realCoins_mainContainer_x2TopDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr 1fr 1fr";
    realCoins_mainContainer_x2BottomDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr 1fr 1fr";
}



setInterval(()=>{

    if(sessionStorage.getItem('%width')===null || sessionStorage.getItem('%width') != screen.width ){


        if(screen.width<330){
            realCoins_mainContainer_x2TopDiv.style.gridTemplateColumns=" 1fr 1fr";
            realCoins_mainContainer_x2BottomDiv.style.gridTemplateColumns=" 1fr 1fr";
    
        }else if(screen.width>330 && screen.width<540){
            realCoins_mainContainer_x2TopDiv.style.gridTemplateColumns=" 1fr 1fr 1fr";
            realCoins_mainContainer_x2BottomDiv.style.gridTemplateColumns=" 1fr 1fr 1fr";

        }else if(screen.width>540 && screen.width<750){
            realCoins_mainContainer_x2TopDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr";
            realCoins_mainContainer_x2BottomDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr";
            
        }else if(screen.width>750 && screen.width<900){
            realCoins_mainContainer_x2TopDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr 1fr";
            realCoins_mainContainer_x2BottomDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr 1fr";

        }else if(screen.width>900){
            realCoins_mainContainer_x2TopDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr 1fr 1fr";
            realCoins_mainContainer_x2BottomDiv.style.gridTemplateColumns=" 1fr 1fr 1fr 1fr 1fr 1fr";
        }

        //SET WIDTH TO LSR
        sessionStorage.setItem('%width',screen.width);

    }

    if(sessionStorage.getItem('%height')===null || sessionStorage.getItem('%height') != screen.height){


        //CHANGE THE SIZE OF realCoins_mainContainer MATCH
        if(screen.height<740){
    
            //CHANGE THE SIZE OF realCoins_mainContainer MATCH
            realCoins_mainContainer.style.height=`${screen.height}px`;
            realCoins_mainContainer_body.style.height=`${screen.height-200}px`;
            realCoins_mainContainer_home.style.height=`${screen.height-200}px`;
            realCoins_mainContainer_x2.style.height=`${screen.height-200}px`;
            realCoins_mainContainer_boost.style.height=`${screen.height-200}px`;realCoins_mainContainer_earn.style.height=`${screen.height-200}px`;
            realCoins_mainContainer_bobols.style.height=`${screen.height-200}px`;
            realCoins_mainContainer_dailyCipher.style.height=`${screen.height-200}px`;
            realCoins_mainContainer_ref.style.height=`${screen.height-200}px`;
        
        
            realCoins_mainContainer_x2TopDiv.style.height=`${(screen.height-200-28)/3}px`;
            realCoins_mainContainer_x2BottomDiv.style.height=`${((screen.height-200-20)-((screen.height-200-20)/3)-50)-15}px`;
        
        }else{
        
            //CHANGE THE SIZE OF realCoins_mainContainer MATCH
            realCoins_mainContainer.style.height=`${screen.height-185}px`;
            realCoins_mainContainer_body.style.height=`${screen.height-200-185}px`;
            realCoins_mainContainer_home.style.height=`${screen.height-200-185}px`;
            realCoins_mainContainer_x2.style.height=`${screen.height-200-185}px`;
            realCoins_mainContainer_boost.style.height=`${screen.height-200-185}px`;realCoins_mainContainer_earn.style.height=`${screen.height-200-185}px`;
            realCoins_mainContainer_bobols.style.height=`${screen.height-200-185}px`;
            realCoins_mainContainer_dailyCipher.style.height=`${screen.height-200-185}px`;
            realCoins_mainContainer_ref.style.height=`${screen.height-200-185}px`;
        
            realCoins_mainContainer_x2TopDiv.style.height=`${(screen.height-200-90-28)/3}px`;
            realCoins_mainContainer_x2BottomDiv.style.height=`${((screen.height-200-95-20)-((screen.height-200-90-20)/3)-50)-15}px`;
        
        }
        
        //SET HEIGHT TO LSR
        sessionStorage.setItem('%height',screen.height);
    }

},100)



let appearNumber1=document.querySelector('.appearNumber1');
let appearNumber2=document.querySelector('.appearNumber2');
let appearNumber3=document.querySelector('.appearNumber3');
let appearNumber4=document.querySelector('.appearNumber4');
let appearNumber5=document.querySelector('.appearNumber5');
let appearNumber6=document.querySelector('.appearNumber6');
let appearNumber7=document.querySelector('.appearNumber7');
let appearNumber8=document.querySelector('.appearNumber8');
let appearNumber9=document.querySelector('.appearNumber9');
let appearNumber10=document.querySelector('.appearNumber10');

let appearNumber11=document.querySelector('.appearNumber11');
let appearNumber12=document.querySelector('.appearNumber12');
let appearNumber13=document.querySelector('.appearNumber13');
let appearNumber14=document.querySelector('.appearNumber14');
let appearNumber15=document.querySelector('.appearNumber15');
let appearNumber16=document.querySelector('.appearNumber16');
let appearNumber17=document.querySelector('.appearNumber17');
let appearNumber18=document.querySelector('.appearNumber18');
let appearNumber19=document.querySelector('.appearNumber19');
let appearNumber20=document.querySelector('.appearNumber20');

let appearNumber21=document.querySelector('.appearNumber21');
let appearNumber22=document.querySelector('.appearNumber22');
let appearNumber23=document.querySelector('.appearNumber23');
let appearNumber24=document.querySelector('.appearNumber24');
let appearNumber25=document.querySelector('.appearNumber25');
let appearNumber26=document.querySelector('.appearNumber26');
let appearNumber27=document.querySelector('.appearNumber27');
let appearNumber28=document.querySelector('.appearNumber28');
let appearNumber29=document.querySelector('.appearNumber29');
let appearNumber30=document.querySelector('.appearNumber30');




    
setInterval(()=>{
    if(`${appearNumber1.style.bottom}`.slice(0,length-1)==='110'){

        appearNumber1.style.bottom=`0%`;
        appearNumber4.style.bottom=`0%`;
        appearNumber7.style.bottom=`0%`;
        appearNumber10.style.bottom=`0%`;

    
        appearNumber1.style.opacity=0;
        appearNumber4.style.opacity=0;
        appearNumber7.style.opacity=0;
        appearNumber10.style.opacity=0;

        
    }//110
    if(`${appearNumber11.style.bottom}`.slice(0,length-1)==='105'){

        appearNumber11.style.bottom=`0%`;
        appearNumber14.style.bottom=`0%`;
        appearNumber17.style.bottom=`0%`;
        appearNumber20.style.bottom=`0%`;

        
        appearNumber11.style.opacity=0;
        appearNumber14.style.opacity=0;
        appearNumber17.style.opacity=0;
        appearNumber20.style.opacity=0;

        
    }//105
    if(`${appearNumber21.style.bottom}`.slice(0,length-1)==='120'){

        appearNumber21.style.bottom=`0%`;
        appearNumber24.style.bottom=`0%`;
        appearNumber27.style.bottom=`0%`;
        appearNumber30.style.bottom=`0%`;

        
        appearNumber21.style.opacity=0;
        appearNumber24.style.opacity=0;
        appearNumber27.style.opacity=0;
        appearNumber30.style.opacity=0;

    }//120


    sessionStorage.setItem('appearNumber1',`${appearNumber1.style.bottom}`.slice(0,length-1)||0)
    sessionStorage.setItem('appearNumber4',`${appearNumber4.style.bottom}`.slice(0,length-1)||0)
    sessionStorage.setItem('appearNumber7',`${appearNumber7.style.bottom}`.slice(0,length-1)||0)
    sessionStorage.setItem('appearNumber10',`${appearNumber10.style.bottom}`.slice(0,length-1)||0)

    sessionStorage.setItem('appearNumber11',`${appearNumber11.style.bottom}`.slice(0,length-1)||0)
    sessionStorage.setItem('appearNumber14',`${appearNumber14.style.bottom}`.slice(0,length-1)||0)
    sessionStorage.setItem('appearNumber17',`${appearNumber17.style.bottom}`.slice(0,length-1)||0)
    sessionStorage.setItem('appearNumber20',`${appearNumber20.style.bottom}`.slice(0,length-1)||0)

    sessionStorage.setItem('appearNumber21',`${appearNumber21.style.bottom}`.slice(0,length-1)||0)
    sessionStorage.setItem('appearNumber24',`${appearNumber24.style.bottom}`.slice(0,length-1)||0)
    sessionStorage.setItem('appearNumber27',`${appearNumber27.style.bottom}`.slice(0,length-1)||0)
    sessionStorage.setItem('appearNumber30',`${appearNumber30.style.bottom}`.slice(0,length-1)||0)


    appearNumber1.style.bottom=`${Number(sessionStorage.getItem('appearNumber1'))+10}%`;
    appearNumber4.style.bottom=`${Number(sessionStorage.getItem('appearNumber4'))+10}%`;
    appearNumber7.style.bottom=`${Number(sessionStorage.getItem('appearNumber7'))+10}%`;
    appearNumber10.style.bottom=`${Number(sessionStorage.getItem('appearNumber10'))+10}%`;

    appearNumber11.style.bottom=`${Number(sessionStorage.getItem('appearNumber11'))+15}%`;
    appearNumber14.style.bottom=`${Number(sessionStorage.getItem('appearNumber14'))+15}%`;
    appearNumber17.style.bottom=`${Number(sessionStorage.getItem('appearNumber17'))+15}%`;
    appearNumber20.style.bottom=`${Number(sessionStorage.getItem('appearNumber20'))+15}%`;

    appearNumber21.style.bottom=`${Number(sessionStorage.getItem('appearNumber21'))+20}%`;
    appearNumber24.style.bottom=`${Number(sessionStorage.getItem('appearNumber24'))+20}%`;
    appearNumber27.style.bottom=`${Number(sessionStorage.getItem('appearNumber27'))+20}%`;
    appearNumber30.style.bottom=`${Number(sessionStorage.getItem('appearNumber30'))+20}%`;

},150)

 setInterval(()=>{
     
     if(`${appearNumber2.style.bottom}`.slice(0,length-1)==='110'){

         appearNumber2.style.bottom=`0%`;
         appearNumber5.style.bottom=`0%`;
         appearNumber8.style.bottom=`0%`;
         
         appearNumber2.style.opacity=0;
         appearNumber5.style.opacity=0;
         appearNumber8.style.opacity=0;
         
     }
     if(`${appearNumber12.style.bottom}`.slice(0,length-1)==='105'){

        appearNumber12.style.bottom=`0%`;
        appearNumber15.style.bottom=`0%`;
        appearNumber18.style.bottom=`0%`;

        appearNumber12.style.opacity=0;
        appearNumber15.style.opacity=0;
        appearNumber18.style.opacity=0;
        
    }
    if(`${appearNumber22.style.bottom}`.slice(0,length-1)==='120'){

        appearNumber22.style.bottom=`0%`;
        appearNumber25.style.bottom=`0%`;
        appearNumber28.style.bottom=`0%`;

        appearNumber22.style.opacity=0;
        appearNumber25.style.opacity=0;
        appearNumber28.style.opacity=0;
        
    }


     sessionStorage.setItem('appearNumber2',`${appearNumber2.style.bottom}`.slice(0,length-1)||0)
     sessionStorage.setItem('appearNumber5',`${appearNumber5.style.bottom}`.slice(0,length-1)||0)
     sessionStorage.setItem('appearNumber8',`${appearNumber8.style.bottom}`.slice(0,length-1)||0)
    
     sessionStorage.setItem('appearNumber12',`${appearNumber12.style.bottom}`.slice(0,length-1)||0)
     sessionStorage.setItem('appearNumber15',`${appearNumber15.style.bottom}`.slice(0,length-1)||0)
     sessionStorage.setItem('appearNumber18',`${appearNumber18.style.bottom}`.slice(0,length-1)||0)
    
     sessionStorage.setItem('appearNumber22',`${appearNumber22.style.bottom}`.slice(0,length-1)||0)
     sessionStorage.setItem('appearNumber25',`${appearNumber25.style.bottom}`.slice(0,length-1)||0)
     sessionStorage.setItem('appearNumber28',`${appearNumber28.style.bottom}`.slice(0,length-1)||0)
    


     appearNumber2.style.bottom=`${Number(sessionStorage.getItem('appearNumber2'))+10}%`;
     appearNumber5.style.bottom=`${Number(sessionStorage.getItem('appearNumber5'))+10}%`;
     appearNumber8.style.bottom=`${Number(sessionStorage.getItem('appearNumber8'))+10}%`;

     appearNumber12.style.bottom=`${Number(sessionStorage.getItem('appearNumber12'))+15}%`;
     appearNumber15.style.bottom=`${Number(sessionStorage.getItem('appearNumber15'))+15}%`;
     appearNumber18.style.bottom=`${Number(sessionStorage.getItem('appearNumber18'))+15}%`;

     appearNumber22.style.bottom=`${Number(sessionStorage.getItem('appearNumber22'))+20}%`;
     appearNumber25.style.bottom=`${Number(sessionStorage.getItem('appearNumber25'))+20}%`;
     appearNumber28.style.bottom=`${Number(sessionStorage.getItem('appearNumber28'))+20}%`;
     

 },200)

 setInterval(()=>{
     
     if(`${appearNumber3.style.bottom}`.slice(0,length-1)==='110'){

         appearNumber3.style.bottom=`0%`;
         appearNumber6.style.bottom=`0%`;
         appearNumber9.style.bottom=`0%`;

         
         appearNumber3.style.opacity=0;
         appearNumber6.style.opacity=0;
         appearNumber9.style.opacity=0;
         
     }
    if(`${appearNumber13.style.bottom}`.slice(0,length-1)==='105'){
   
        appearNumber13.style.bottom=`0%`;
        appearNumber16.style.bottom=`0%`;
        appearNumber19.style.bottom=`0%`;

        appearNumber13.style.opacity=0;
        appearNumber16.style.opacity=0;
        appearNumber19.style.opacity=0;

    }
    if(`${appearNumber23.style.bottom}`.slice(0,length-1)==='120'){

        appearNumber23.style.bottom=`0%`;
        appearNumber26.style.bottom=`0%`;
        appearNumber29.style.bottom=`0%`;

        appearNumber23.style.opacity=0;
        appearNumber26.style.opacity=0;
        appearNumber29.style.opacity=0;
        
    }


     sessionStorage.setItem('appearNumber3',`${appearNumber3.style.bottom}`.slice(0,length-1)||0)
     sessionStorage.setItem('appearNumber6',`${appearNumber6.style.bottom}`.slice(0,length-1)||0)
     sessionStorage.setItem('appearNumber9',`${appearNumber9.style.bottom}`.slice(0,length-1)||0)

     sessionStorage.setItem('appearNumber13',`${appearNumber13.style.bottom}`.slice(0,length-1)||0)
     sessionStorage.setItem('appearNumber16',`${appearNumber16.style.bottom}`.slice(0,length-1)||0)
     sessionStorage.setItem('appearNumber19',`${appearNumber19.style.bottom}`.slice(0,length-1)||0)

     sessionStorage.setItem('appearNumber23',`${appearNumber23.style.bottom}`.slice(0,length-1)||0)
     sessionStorage.setItem('appearNumber26',`${appearNumber26.style.bottom}`.slice(0,length-1)||0)
     sessionStorage.setItem('appearNumber29',`${appearNumber29.style.bottom}`.slice(0,length-1)||0)
    


     appearNumber3.style.bottom=`${Number(sessionStorage.getItem('appearNumber3'))+10}%`;
     appearNumber6.style.bottom=`${Number(sessionStorage.getItem('appearNumber6'))+10}%`;
     appearNumber9.style.bottom=`${Number(sessionStorage.getItem('appearNumber9'))+10}%`;

     appearNumber13.style.bottom=`${Number(sessionStorage.getItem('appearNumber13'))+15}%`;
     appearNumber16.style.bottom=`${Number(sessionStorage.getItem('appearNumber16'))+15}%`;
     appearNumber19.style.bottom=`${Number(sessionStorage.getItem('appearNumber19'))+15}%`;

     appearNumber23.style.bottom=`${Number(sessionStorage.getItem('appearNumber23'))+20}%`;
     appearNumber26.style.bottom=`${Number(sessionStorage.getItem('appearNumber26'))+20}%`;
     appearNumber29.style.bottom=`${Number(sessionStorage.getItem('appearNumber29'))+20}%`;
     

 },250)



const appearNumber=document.querySelectorAll('.appearNumber');
appearNumber.forEach((e)=>{
    e.addEventListener('click',()=>{

        let appearId_dataDashed=Number(e.dataset.id);
        document.querySelector(`.appearNumber${appearId_dataDashed}`).style.opacity=1;
    
    })
})



setInterval(()=>{

    if(localStorage.getItem('coinsCount') === null){
        localStorage.setItem('coinsCount',0)
    }

    let coinsCount=`${localStorage.getItem('coinsCount')}`;
    if(coinsCount.length===4){
        coinsCount=coinsCount.slice(0,1)+','+coinsCount.slice(1,4);
    }
    document.querySelector('.displayCoinsClaimAmount').innerHTML=`${coinsCount}`;


    if(localStorage.getItem('displayCoins') === null){
        localStorage.setItem('displayCoins',0)
    }

    let displayCoins=`${localStorage.getItem('displayCoins')}`;
    if(displayCoins.length===4){
        displayCoins=displayCoins.slice(0,1)+','+displayCoins.slice(1,4);
    }else if(displayCoins.length===5){
        displayCoins=displayCoins.slice(0,2)+','+displayCoins.slice(1,4);
    }else if(displayCoins.length===6){
        displayCoins=displayCoins.slice(0,3)+','+displayCoins.slice(1,4);
    }else if(displayCoins.length===7){
        displayCoins=`${(displayCoins/1000000).toFixed(3)}M`;
    }else if(displayCoins.length===8 ||displayCoins.length===9){
        displayCoins=`${(displayCoins/1000000).toFixed(3)}M`;
    }else if(displayCoins.length===10){
        displayCoins=`${(displayCoins/1000000000).toFixed(3)}B`;
    }else if(displayCoins.length===11 || displayCoins.length===12){
        displayCoins=`${(displayCoins/1000000000).toFixed(3)}B`;
    }else if(displayCoins.length===13){
        displayCoins=`${(displayCoins/1000000000000).toFixed(3)}T`;
    }


    document.querySelector('.displayCoinsAmount').innerHTML=`${displayCoins}`;
    document.querySelector('.displayDoller').innerHTML=`&#36 ${(Number(localStorage.getItem('displayCoins'))/80000).toFixed(5)}`;

    document.querySelector('.realCoins_mainContainer_x2TotalDoller').innerHTML=`&#36 ${(Number(localStorage.getItem('displayCoins'))/80000).toFixed(5)}`;
    document.querySelector('.boostTotalBalance').innerHTML=`&#36 ${(Number(localStorage.getItem('displayCoins'))/80000).toFixed(5)}`;
    
    
    if(Number(localStorage.getItem('coinsCount'))===0){

        document.querySelector('.clickSign').style.display='none';
        document.querySelector('.claimButton').style.backgroundColor='rgb(0, 0, 28)';

    }else{

        document.querySelector('.clickSign').style.display='block';
        document.querySelector('.claimButton').style.backgroundColor='rgb(0, 0, 90)';
    }

},100)

const displayByClick=document.querySelectorAll('.displayByClick');
displayByClick.forEach((e)=>{
    e.addEventListener('click',()=>{

        if(localStorage.getItem('coinsCount')<1000){
            let getItem=Number(localStorage.getItem('coinsCount'))||0;
            localStorage.setItem('coinsCount',getItem+Number(localStorage.getItem('boostValue')))
        }
        
        
    })
})



document.querySelector('.claimButton').addEventListener('click',()=>{
    
    if(Number(localStorage.getItem('coinsCount'))<=1000 && Number(localStorage.getItem('coinsCount'))!=0){
        let displayCoins=Number(localStorage.getItem('displayCoins'))||0;
        localStorage.setItem('displayCoins',Number(localStorage.getItem('displayCoins'))+Number(localStorage.getItem('coinsCount')))

        localStorage.setItem('coinsCount',0)

        localStorage.setItem('coinsContainerBottomI',0)
        localStorage.setItem('coinsContainerBottomII',0)
                
        coinsContainer_coinsI.style.opacity=1;
        coinsContainer_coinsIII.style.opacity=1;
        coinsContainer_coinsV.style.opacity=1;
        coinsContainer_coinsVII.style.opacity=1;
        coinsContainer_coinsIX.style.opacity=1;
        coinsContainer_coinsII.style.opacity=1;
        coinsContainer_coinsIV.style.opacity=1;
        coinsContainer_coinsVI.style.opacity=1;
        coinsContainer_coinsVIII.style.opacity=1;
        coinsContainer_coinsX.style.opacity=1;
    }
})













setInterval(()=>{
    let tapswapRandom=Math.round(Math.random()*100);
    let hamsterkonbatRandom=Math.round(Math.random()*100);
    let aquaprotocolRandom=Math.round(Math.random()*100);
    let blumRandom=Math.round(Math.random()*100);
    let memefiRandom=Math.round(Math.random()*100);
    let gemzcoinRandom=Math.round(Math.random()*100);
    let loscoinRandom=Math.round(Math.random()*100);
    let notcoinRandom=Math.round(Math.random()*100);
    let tigernetworkRandom=Math.round(Math.random()*100);
    let simpletapRandom=Math.round(Math.random()*100);
    let koloRandom=Math.round(Math.random()*100);
    let cashcoingameRandom=Math.round(Math.random()*100);
    let dotcoinRandom=Math.round(Math.random()*100);
    let bbqcoinRandom=Math.round(Math.random()*100);
    let cexoiRandom=Math.round(Math.random()*100);
    let seedcoinRandom=Math.round(Math.random()*100);
    let pocketrocketRandom=Math.round(Math.random()*100);
    let yescoinRandom=Math.round(Math.random()*100);
    let avagoldcoinRandom=Math.round(Math.random()*100);


    
    
    //TAPSWAP
    if(tapswapRandom<50){
        //TAPSWAP
        document.querySelector('.tapswap_stickReadSell').style.bottom=`${tapswapRandom}%`;
        document.querySelector('.tapswap_stickReadSell').style.backgroundColor='red';
        document.querySelector('.tapswap_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.tapswap_AmountSell').innerHTML=`&#36 0.0${tapswapRandom}`;
        document.querySelector('.tapswap_AmountSell').style.color='red';
        //
        document.querySelector('.tapswap_stickReadBuy').style.bottom=`${tapswapRandom}%`;
        document.querySelector('.tapswap_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.tapswap_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.tapswap_AmountBuy').innerHTML=`&#36 0.0${tapswapRandom}`;
        document.querySelector('.tapswap_AmountBuy').style.color='red';

    }else{
        //TAPSWAP
        document.querySelector('.tapswap_stickReadSell').style.bottom=`${tapswapRandom}%`;
        document.querySelector('.tapswap_stickReadSell').style.backgroundColor='green';
        document.querySelector('.tapswap_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.tapswap_AmountSell').innerHTML=`&#36 0.0${tapswapRandom}`;
        document.querySelector('.tapswap_AmountSell').style.color='green';
        //
        document.querySelector('.tapswap_stickReadBuy').style.bottom=`${tapswapRandom}%`;
        document.querySelector('.tapswap_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.tapswap_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.tapswap_AmountBuy').innerHTML=`&#36 0.0${tapswapRandom}`;
        document.querySelector('.tapswap_AmountBuy').style.color='green';

    }
    //HAMSTER KOMBAT 
    if(hamsterkonbatRandom<50){
        //HAMSTER KOMBAT 
        document.querySelector('.hamsterkonbat_stickReadSell').style.bottom=`${hamsterkonbatRandom}%`;
        document.querySelector('.hamsterkonbat_stickReadSell').style.backgroundColor='red';
        document.querySelector('.hamsterkonbat_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.hamsterkonbat_AmountSell').innerHTML=`&#36 0.0${hamsterkonbatRandom}`;
        document.querySelector('.hamsterkonbat_AmountSell').style.color='red';
        //
        document.querySelector('.hamsterkonbat_stickReadBuy').style.bottom=`${hamsterkonbatRandom}%`;
        document.querySelector('.hamsterkonbat_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.hamsterkonbat_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.hamsterkonbat_AmountBuy').innerHTML=`&#36 0.0${hamsterkonbatRandom}`;
        document.querySelector('.hamsterkonbat_AmountBuy').style.color='red';

    }else{
        //HAMSTER KOMBAT 
        document.querySelector('.hamsterkonbat_stickReadSell').style.bottom=`${hamsterkonbatRandom}%`;
        document.querySelector('.hamsterkonbat_stickReadSell').style.backgroundColor='green';
        document.querySelector('.hamsterkonbat_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.hamsterkonbat_AmountSell').innerHTML=`&#36 0.0${hamsterkonbatRandom}`;
        document.querySelector('.hamsterkonbat_AmountSell').style.color='green';
        //
        document.querySelector('.hamsterkonbat_stickReadBuy').style.bottom=`${hamsterkonbatRandom}%`;
        document.querySelector('.hamsterkonbat_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.hamsterkonbat_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.hamsterkonbat_AmountBuy').innerHTML=`&#36 0.0${hamsterkonbatRandom}`;
        document.querySelector('.hamsterkonbat_AmountBuy').style.color='green';

    }
    //AQUAPROTOCOL
    if(aquaprotocolRandom<50){
        //AQUAPROTOCOL 
        document.querySelector('.aquaprotocol_stickReadSell').style.bottom=`${aquaprotocolRandom}%`;
        document.querySelector('.aquaprotocol_stickReadSell').style.backgroundColor='red';
        document.querySelector('.aquaprotocol_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.aquaprotocol_AmountSell').innerHTML=`&#36 0.0${aquaprotocolRandom}`;
        document.querySelector('.aquaprotocol_AmountSell').style.color='red';
        //
        document.querySelector('.aquaprotocol_stickReadBuy').style.bottom=`${aquaprotocolRandom}%`;
        document.querySelector('.aquaprotocol_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.aquaprotocol_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.aquaprotocol_AmountBuy').innerHTML=`&#36 0.0${aquaprotocolRandom}`;
        document.querySelector('.aquaprotocol_AmountBuy').style.color='red';
    }else{
        //AQUAPROTOCOL 
        document.querySelector('.aquaprotocol_stickReadSell').style.bottom=`${aquaprotocolRandom}%`;
        document.querySelector('.aquaprotocol_stickReadSell').style.backgroundColor='green';
        document.querySelector('.aquaprotocol_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.aquaprotocol_AmountSell').innerHTML=`&#36 0.0${aquaprotocolRandom}`;
        document.querySelector('.aquaprotocol_AmountSell').style.color='green';
        //
        document.querySelector('.aquaprotocol_stickReadBuy').style.bottom=`${aquaprotocolRandom}%`;
        document.querySelector('.aquaprotocol_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.aquaprotocol_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.aquaprotocol_AmountBuy').innerHTML=`&#36 0.0${aquaprotocolRandom}`;
        document.querySelector('.aquaprotocol_AmountBuy').style.color='green';

    }
    //BLUM
    if(blumRandom<50){
        //BLUM
        document.querySelector('.blum_stickReadSell').style.bottom=`${blumRandom}%`;
        document.querySelector('.blum_stickReadSell').style.backgroundColor='red';
        document.querySelector('.blum_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.blum_AmountSell').innerHTML=`&#36 0.0${blumRandom}`;
        document.querySelector('.blum_AmountSell').style.color='red';
        //
        document.querySelector('.blum_stickReadBuy').style.bottom=`${blumRandom}%`;
        document.querySelector('.blum_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.blum_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.blum_AmountBuy').innerHTML=`&#36 0.0${blumRandom}`;
        document.querySelector('.blum_AmountBuy').style.color='red';

    }else{
        //BLUM
        document.querySelector('.blum_stickReadSell').style.bottom=`${blumRandom}%`;
        document.querySelector('.blum_stickReadSell').style.backgroundColor='green';
        document.querySelector('.blum_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.blum_AmountSell').innerHTML=`&#36 0.0${blumRandom}`;
        document.querySelector('.blum_AmountSell').style.color='green';
        //
        document.querySelector('.blum_stickReadBuy').style.bottom=`${blumRandom}%`;
        document.querySelector('.blum_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.blum_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.blum_AmountBuy').innerHTML=`&#36 0.0${blumRandom}`;
        document.querySelector('.blum_AmountBuy').style.color='green';

    }
    //MEMEFI
    if(memefiRandom<50){
        //MEMEFI
        document.querySelector('.memefi_stickReadSell').style.bottom=`${memefiRandom}%`;
        document.querySelector('.memefi_stickReadSell').style.backgroundColor='red';
        document.querySelector('.memefi_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.memefi_AmountSell').innerHTML=`&#36 0.0${memefiRandom}`;
        document.querySelector('.memefi_AmountSell').style.color='red';
        //
        document.querySelector('.memefi_stickReadBuy').style.bottom=`${memefiRandom}%`;
        document.querySelector('.memefi_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.memefi_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.memefi_AmountBuy').innerHTML=`&#36 0.0${memefiRandom}`;
        document.querySelector('.memefi_AmountBuy').style.color='red';

    }else{
        //MEMEFI
        document.querySelector('.memefi_stickReadSell').style.bottom=`${memefiRandom}%`;
        document.querySelector('.memefi_stickReadSell').style.backgroundColor='green';
        document.querySelector('.memefi_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.memefi_AmountSell').innerHTML=`&#36 0.0${memefiRandom}`;
        document.querySelector('.memefi_AmountSell').style.color='green';
        //
        document.querySelector('.memefi_stickReadBuy').style.bottom=`${memefiRandom}%`;
        document.querySelector('.memefi_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.memefi_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.memefi_AmountBuy').innerHTML=`&#36 0.0${memefiRandom}`;
        document.querySelector('.memefi_AmountBuy').style.color='green';

    }



    //gemzcoin
    if(gemzcoinRandom<50){
        //gemzcoin
        document.querySelector('.gemzcoin_stickReadSell').style.bottom=`${gemzcoinRandom}%`;
        document.querySelector('.gemzcoin_stickReadSell').style.backgroundColor='red';
        document.querySelector('.gemzcoin_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.gemzcoin_AmountSell').innerHTML=`&#36 0.0${gemzcoinRandom}`;
        document.querySelector('.gemzcoin_AmountSell').style.color='red';
        //
        document.querySelector('.gemzcoin_stickReadBuy').style.bottom=`${gemzcoinRandom}%`;
        document.querySelector('.gemzcoin_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.gemzcoin_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.gemzcoin_AmountBuy').innerHTML=`&#36 0.0${gemzcoinRandom}`;
        document.querySelector('.gemzcoin_AmountBuy').style.color='red';

    }else{
        //gemzcoin
        document.querySelector('.gemzcoin_stickReadSell').style.bottom=`${gemzcoinRandom}%`;
        document.querySelector('.gemzcoin_stickReadSell').style.backgroundColor='green';
        document.querySelector('.gemzcoin_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.gemzcoin_AmountSell').innerHTML=`&#36 0.0${gemzcoinRandom}`;
        document.querySelector('.gemzcoin_AmountSell').style.color='green';
        //
        document.querySelector('.gemzcoin_stickReadBuy').style.bottom=`${gemzcoinRandom}%`;
        document.querySelector('.gemzcoin_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.gemzcoin_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.gemzcoin_AmountBuy').innerHTML=`&#36 0.0${gemzcoinRandom}`;
        document.querySelector('.gemzcoin_AmountBuy').style.color='green';

    }


    //loscoin
    if(loscoinRandom<50){
        //loscoin
        document.querySelector('.loscoin_stickReadSell').style.bottom=`${loscoinRandom}%`;
        document.querySelector('.loscoin_stickReadSell').style.backgroundColor='red';
        document.querySelector('.loscoin_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.loscoin_AmountSell').innerHTML=`&#36 0.0${loscoinRandom}`;
        document.querySelector('.loscoin_AmountSell').style.color='red';
        //
        document.querySelector('.loscoin_stickReadBuy').style.bottom=`${loscoinRandom}%`;
        document.querySelector('.loscoin_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.loscoin_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.loscoin_AmountBuy').innerHTML=`&#36 0.0${loscoinRandom}`;
        document.querySelector('.loscoin_AmountBuy').style.color='red';

    }else{
        //loscoin
        document.querySelector('.loscoin_stickReadSell').style.bottom=`${loscoinRandom}%`;
        document.querySelector('.loscoin_stickReadSell').style.backgroundColor='green';
        document.querySelector('.loscoin_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.loscoin_AmountSell').innerHTML=`&#36 0.0${loscoinRandom}`;
        document.querySelector('.loscoin_AmountSell').style.color='green';
        //
        document.querySelector('.loscoin_stickReadBuy').style.bottom=`${loscoinRandom}%`;
        document.querySelector('.loscoin_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.loscoin_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.loscoin_AmountBuy').innerHTML=`&#36 0.0${loscoinRandom}`;
        document.querySelector('.loscoin_AmountBuy').style.color='green';

    }

    //notcoin
    if(notcoinRandom<50){
        //notcoin
        document.querySelector('.notcoin_stickReadSell').style.bottom=`${notcoinRandom}%`;
        document.querySelector('.notcoin_stickReadSell').style.backgroundColor='red';
        document.querySelector('.notcoin_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.notcoin_AmountSell').innerHTML=`&#36 0.0${notcoinRandom}`;
        document.querySelector('.notcoin_AmountSell').style.color='red';
        //
        document.querySelector('.notcoin_stickReadBuy').style.bottom=`${notcoinRandom}%`;
        document.querySelector('.notcoin_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.notcoin_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.notcoin_AmountBuy').innerHTML=`&#36 0.0${notcoinRandom}`;
        document.querySelector('.notcoin_AmountBuy').style.color='red';

    }else{
        //notcoin
        document.querySelector('.notcoin_stickReadSell').style.bottom=`${notcoinRandom}%`;
        document.querySelector('.notcoin_stickReadSell').style.backgroundColor='green';
        document.querySelector('.notcoin_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.notcoin_AmountSell').innerHTML=`&#36 0.0${notcoinRandom}`;
        document.querySelector('.notcoin_AmountSell').style.color='green';
        //
        document.querySelector('.notcoin_stickReadBuy').style.bottom=`${notcoinRandom}%`;
        document.querySelector('.notcoin_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.notcoin_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.notcoin_AmountBuy').innerHTML=`&#36 0.0${notcoinRandom}`;
        document.querySelector('.notcoin_AmountBuy').style.color='green';

    }

    //tigernetwork
    if(tigernetworkRandom<50){
        //tigernetwork
        document.querySelector('.tigernetwork_stickReadSell').style.bottom=`${tigernetworkRandom}%`;
        document.querySelector('.tigernetwork_stickReadSell').style.backgroundColor='red';
        document.querySelector('.tigernetwork_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.tigernetwork_AmountSell').innerHTML=`&#36 0.0${tigernetworkRandom}`;
        document.querySelector('.tigernetwork_AmountSell').style.color='red';
        //
        document.querySelector('.tigernetwork_stickReadBuy').style.bottom=`${tigernetworkRandom}%`;
        document.querySelector('.tigernetwork_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.tigernetwork_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.tigernetwork_AmountBuy').innerHTML=`&#36 0.0${tigernetworkRandom}`;
        document.querySelector('.tigernetwork_AmountBuy').style.color='red';

    }else{
        //tigernetwork
        document.querySelector('.tigernetwork_stickReadSell').style.bottom=`${tigernetworkRandom}%`;
        document.querySelector('.tigernetwork_stickReadSell').style.backgroundColor='green';
        document.querySelector('.tigernetwork_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.tigernetwork_AmountSell').innerHTML=`&#36 0.0${tigernetworkRandom}`;
        document.querySelector('.tigernetwork_AmountSell').style.color='green';
        //
        document.querySelector('.tigernetwork_stickReadBuy').style.bottom=`${tigernetworkRandom}%`;
        document.querySelector('.tigernetwork_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.tigernetwork_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.tigernetwork_AmountBuy').innerHTML=`&#36 0.0${tigernetworkRandom}`;
        document.querySelector('.tigernetwork_AmountBuy').style.color='green';

    }

    //simpletap
    if(simpletapRandom<50){
        //simpletap
        document.querySelector('.simpletap_stickReadSell').style.bottom=`${simpletapRandom}%`;
        document.querySelector('.simpletap_stickReadSell').style.backgroundColor='red';
        document.querySelector('.simpletap_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.simpletap_AmountSell').innerHTML=`&#36 0.0${simpletapRandom}`;
        document.querySelector('.simpletap_AmountSell').style.color='red';
        //
        document.querySelector('.simpletap_stickReadBuy').style.bottom=`${simpletapRandom}%`;
        document.querySelector('.simpletap_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.simpletap_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.simpletap_AmountBuy').innerHTML=`&#36 0.0${simpletapRandom}`;
        document.querySelector('.simpletap_AmountBuy').style.color='red';

    }else{
        //simpletap
        document.querySelector('.simpletap_stickReadSell').style.bottom=`${simpletapRandom}%`;
        document.querySelector('.simpletap_stickReadSell').style.backgroundColor='green';
        document.querySelector('.simpletap_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.simpletap_AmountSell').innerHTML=`&#36 0.0${simpletapRandom}`;
        document.querySelector('.simpletap_AmountSell').style.color='green';
        //
        document.querySelector('.simpletap_stickReadBuy').style.bottom=`${simpletapRandom}%`;
        document.querySelector('.simpletap_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.simpletap_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.simpletap_AmountBuy').innerHTML=`&#36 0.0${simpletapRandom}`;
        document.querySelector('.simpletap_AmountBuy').style.color='green';

    }

    //kolo
    if(koloRandom<50){
        //kolo
        document.querySelector('.kolo_stickReadSell').style.bottom=`${koloRandom}%`;
        document.querySelector('.kolo_stickReadSell').style.backgroundColor='red';
        document.querySelector('.kolo_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.kolo_AmountSell').innerHTML=`&#36 0.0${koloRandom}`;
        document.querySelector('.kolo_AmountSell').style.color='red';
        //
        document.querySelector('.kolo_stickReadBuy').style.bottom=`${koloRandom}%`;
        document.querySelector('.kolo_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.kolo_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.kolo_AmountBuy').innerHTML=`&#36 0.0${koloRandom}`;
        document.querySelector('.kolo_AmountBuy').style.color='red';

    }else{
        //kolo
        document.querySelector('.kolo_stickReadSell').style.bottom=`${koloRandom}%`;
        document.querySelector('.kolo_stickReadSell').style.backgroundColor='green';
        document.querySelector('.kolo_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.kolo_AmountSell').innerHTML=`&#36 0.0${koloRandom}`;
        document.querySelector('.kolo_AmountSell').style.color='green';
        //
        document.querySelector('.kolo_stickReadBuy').style.bottom=`${koloRandom}%`;
        document.querySelector('.kolo_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.kolo_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.kolo_AmountBuy').innerHTML=`&#36 0.0${koloRandom}`;
        document.querySelector('.kolo_AmountBuy').style.color='green';

    }

    //cashcoingame
    if(cashcoingameRandom<50){
        //cashcoingame
        document.querySelector('.cashcoingame_stickReadSell').style.bottom=`${cashcoingameRandom}%`;
        document.querySelector('.cashcoingame_stickReadSell').style.backgroundColor='red';
        document.querySelector('.cashcoingame_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.cashcoingame_AmountSell').innerHTML=`&#36 0.0${cashcoingameRandom}`;
        document.querySelector('.cashcoingame_AmountSell').style.color='red';
        //
        document.querySelector('.cashcoingame_stickReadBuy').style.bottom=`${cashcoingameRandom}%`;
        document.querySelector('.cashcoingame_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.cashcoingame_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.cashcoingame_AmountBuy').innerHTML=`&#36 0.0${cashcoingameRandom}`;
        document.querySelector('.cashcoingame_AmountBuy').style.color='red';

    }else{
        //cashcoingame
        document.querySelector('.cashcoingame_stickReadSell').style.bottom=`${cashcoingameRandom}%`;
        document.querySelector('.cashcoingame_stickReadSell').style.backgroundColor='green';
        document.querySelector('.cashcoingame_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.cashcoingame_AmountSell').innerHTML=`&#36 0.0${cashcoingameRandom}`;
        document.querySelector('.cashcoingame_AmountSell').style.color='green';
        //
        document.querySelector('.cashcoingame_stickReadBuy').style.bottom=`${cashcoingameRandom}%`;
        document.querySelector('.cashcoingame_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.cashcoingame_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.cashcoingame_AmountBuy').innerHTML=`&#36 0.0${cashcoingameRandom}`;
        document.querySelector('.cashcoingame_AmountBuy').style.color='green';

    }

    //dotcoin
    if(dotcoinRandom<50){
        //dotcoin
        document.querySelector('.dotcoin_stickReadSell').style.bottom=`${dotcoinRandom}%`;
        document.querySelector('.dotcoin_stickReadSell').style.backgroundColor='red';
        document.querySelector('.dotcoin_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.dotcoin_AmountSell').innerHTML=`&#36 0.0${dotcoinRandom}`;
        document.querySelector('.dotcoin_AmountSell').style.color='red';
        //
        document.querySelector('.dotcoin_stickReadBuy').style.bottom=`${dotcoinRandom}%`;
        document.querySelector('.dotcoin_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.dotcoin_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.dotcoin_AmountBuy').innerHTML=`&#36 0.0${dotcoinRandom}`;
        document.querySelector('.dotcoin_AmountBuy').style.color='red';

    }else{
        //dotcoin
        document.querySelector('.dotcoin_stickReadSell').style.bottom=`${dotcoinRandom}%`;
        document.querySelector('.dotcoin_stickReadSell').style.backgroundColor='green';
        document.querySelector('.dotcoin_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.dotcoin_AmountSell').innerHTML=`&#36 0.0${dotcoinRandom}`;
        document.querySelector('.dotcoin_AmountSell').style.color='green';
        //
        document.querySelector('.dotcoin_stickReadBuy').style.bottom=`${dotcoinRandom}%`;
        document.querySelector('.dotcoin_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.dotcoin_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.dotcoin_AmountBuy').innerHTML=`&#36 0.0${dotcoinRandom}`;
        document.querySelector('.dotcoin_AmountBuy').style.color='green';

    }

    //bbqcoin
    if(bbqcoinRandom<50){
        //bbqcoin
        document.querySelector('.bbqcoin_stickReadSell').style.bottom=`${bbqcoinRandom}%`;
        document.querySelector('.bbqcoin_stickReadSell').style.backgroundColor='red';
        document.querySelector('.bbqcoin_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.bbqcoin_AmountSell').innerHTML=`&#36 0.0${bbqcoinRandom}`;
        document.querySelector('.bbqcoin_AmountSell').style.color='red';
        //
        document.querySelector('.bbqcoin_stickReadBuy').style.bottom=`${bbqcoinRandom}%`;
        document.querySelector('.bbqcoin_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.bbqcoin_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.bbqcoin_AmountBuy').innerHTML=`&#36 0.0${bbqcoinRandom}`;
        document.querySelector('.bbqcoin_AmountBuy').style.color='red';

    }else{
        //bbqcoin
        document.querySelector('.bbqcoin_stickReadSell').style.bottom=`${bbqcoinRandom}%`;
        document.querySelector('.bbqcoin_stickReadSell').style.backgroundColor='green';
        document.querySelector('.bbqcoin_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.bbqcoin_AmountSell').innerHTML=`&#36 0.0${bbqcoinRandom}`;
        document.querySelector('.bbqcoin_AmountSell').style.color='green';
        //
        document.querySelector('.bbqcoin_stickReadBuy').style.bottom=`${bbqcoinRandom}%`;
        document.querySelector('.bbqcoin_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.bbqcoin_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.bbqcoin_AmountBuy').innerHTML=`&#36 0.0${bbqcoinRandom}`;
        document.querySelector('.bbqcoin_AmountBuy').style.color='green';

    }

    //cexoi
    if(cexoiRandom<50){
        //cexoi
        document.querySelector('.cexoi_stickReadSell').style.bottom=`${cexoiRandom}%`;
        document.querySelector('.cexoi_stickReadSell').style.backgroundColor='red';
        document.querySelector('.cexoi_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.cexoi_AmountSell').innerHTML=`&#36 0.0${cexoiRandom}`;
        document.querySelector('.cexoi_AmountSell').style.color='red';
        //
        document.querySelector('.cexoi_stickReadBuy').style.bottom=`${cexoiRandom}%`;
        document.querySelector('.cexoi_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.cexoi_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.cexoi_AmountBuy').innerHTML=`&#36 0.0${cexoiRandom}`;
        document.querySelector('.cexoi_AmountBuy').style.color='red';

    }else{
        //cexoi
        document.querySelector('.cexoi_stickReadSell').style.bottom=`${cexoiRandom}%`;
        document.querySelector('.cexoi_stickReadSell').style.backgroundColor='green';
        document.querySelector('.cexoi_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.cexoi_AmountSell').innerHTML=`&#36 0.0${cexoiRandom}`;
        document.querySelector('.cexoi_AmountSell').style.color='green';
        //
        document.querySelector('.cexoi_stickReadBuy').style.bottom=`${cexoiRandom}%`;
        document.querySelector('.cexoi_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.cexoi_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.cexoi_AmountBuy').innerHTML=`&#36 0.0${cexoiRandom}`;
        document.querySelector('.cexoi_AmountBuy').style.color='green';

    }

    //seedcoin
    if(seedcoinRandom<50){
        //seedcoin
        document.querySelector('.seedcoin_stickReadSell').style.bottom=`${seedcoinRandom}%`;
        document.querySelector('.seedcoin_stickReadSell').style.backgroundColor='red';
        document.querySelector('.seedcoin_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.seedcoin_AmountSell').innerHTML=`&#36 0.0${seedcoinRandom}`;
        document.querySelector('.seedcoin_AmountSell').style.color='red';
        //
        document.querySelector('.seedcoin_stickReadBuy').style.bottom=`${seedcoinRandom}%`;
        document.querySelector('.seedcoin_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.seedcoin_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.seedcoin_AmountBuy').innerHTML=`&#36 0.0${seedcoinRandom}`;
        document.querySelector('.seedcoin_AmountBuy').style.color='red';

    }else{
        //seedcoin
        document.querySelector('.seedcoin_stickReadSell').style.bottom=`${seedcoinRandom}%`;
        document.querySelector('.seedcoin_stickReadSell').style.backgroundColor='green';
        document.querySelector('.seedcoin_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.seedcoin_AmountSell').innerHTML=`&#36 0.0${seedcoinRandom}`;
        document.querySelector('.seedcoin_AmountSell').style.color='green';
        //
        document.querySelector('.seedcoin_stickReadBuy').style.bottom=`${seedcoinRandom}%`;
        document.querySelector('.seedcoin_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.seedcoin_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.seedcoin_AmountBuy').innerHTML=`&#36 0.0${seedcoinRandom}`;
        document.querySelector('.seedcoin_AmountBuy').style.color='green';

    }

    //pocketrocket
    if(pocketrocketRandom<50){
        //pocketrocket
        document.querySelector('.pocketrocket_stickReadSell').style.bottom=`${pocketrocketRandom}%`;
        document.querySelector('.pocketrocket_stickReadSell').style.backgroundColor='red';
        document.querySelector('.pocketrocket_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.pocketrocket_AmountSell').innerHTML=`&#36 0.0${pocketrocketRandom}`;
        document.querySelector('.pocketrocket_AmountSell').style.color='red';
        //
        document.querySelector('.pocketrocket_stickReadBuy').style.bottom=`${pocketrocketRandom}%`;
        document.querySelector('.pocketrocket_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.pocketrocket_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.pocketrocket_AmountBuy').innerHTML=`&#36 0.0${pocketrocketRandom}`;
        document.querySelector('.pocketrocket_AmountBuy').style.color='red';

    }else{
        //pocketrocket
        document.querySelector('.pocketrocket_stickReadSell').style.bottom=`${pocketrocketRandom}%`;
        document.querySelector('.pocketrocket_stickReadSell').style.backgroundColor='green';
        document.querySelector('.pocketrocket_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.pocketrocket_AmountSell').innerHTML=`&#36 0.0${pocketrocketRandom}`;
        document.querySelector('.pocketrocket_AmountSell').style.color='green';
        //
        document.querySelector('.pocketrocket_stickReadBuy').style.bottom=`${pocketrocketRandom}%`;
        document.querySelector('.pocketrocket_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.pocketrocket_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.pocketrocket_AmountBuy').innerHTML=`&#36 0.0${pocketrocketRandom}`;
        document.querySelector('.pocketrocket_AmountBuy').style.color='green';

    }

    //yescoin
    if(yescoinRandom<50){
        //yescoin
        document.querySelector('.yescoin_stickReadSell').style.bottom=`${yescoinRandom}%`;
        document.querySelector('.yescoin_stickReadSell').style.backgroundColor='red';
        document.querySelector('.yescoin_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.yescoin_AmountSell').innerHTML=`&#36 0.0${yescoinRandom}`;
        document.querySelector('.yescoin_AmountSell').style.color='red';
        //
        document.querySelector('.yescoin_stickReadBuy').style.bottom=`${yescoinRandom}%`;
        document.querySelector('.yescoin_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.yescoin_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.yescoin_AmountBuy').innerHTML=`&#36 0.0${yescoinRandom}`;
        document.querySelector('.yescoin_AmountBuy').style.color='red';

    }else{
        //yescoin
        document.querySelector('.yescoin_stickReadSell').style.bottom=`${yescoinRandom}%`;
        document.querySelector('.yescoin_stickReadSell').style.backgroundColor='green';
        document.querySelector('.yescoin_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.yescoin_AmountSell').innerHTML=`&#36 0.0${yescoinRandom}`;
        document.querySelector('.yescoin_AmountSell').style.color='green';
        //
        document.querySelector('.yescoin_stickReadBuy').style.bottom=`${yescoinRandom}%`;
        document.querySelector('.yescoin_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.yescoin_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.yescoin_AmountBuy').innerHTML=`&#36 0.0${yescoinRandom}`;
        document.querySelector('.yescoin_AmountBuy').style.color='green';

    }

    //avagoldcoin
    if(avagoldcoinRandom<50){
        //avagoldcoin
        document.querySelector('.avagoldcoin_stickReadSell').style.bottom=`${avagoldcoinRandom}%`;
        document.querySelector('.avagoldcoin_stickReadSell').style.backgroundColor='red';
        document.querySelector('.avagoldcoin_stickSell').style.borderLeft='1px solid red';
        document.querySelector('.avagoldcoin_AmountSell').innerHTML=`&#36 0.0${avagoldcoinRandom}`;
        document.querySelector('.avagoldcoin_AmountSell').style.color='red';
        //
        document.querySelector('.avagoldcoin_stickReadBuy').style.bottom=`${avagoldcoinRandom}%`;
        document.querySelector('.avagoldcoin_stickReadBuy').style.backgroundColor='red';
        document.querySelector('.avagoldcoin_stickBuy').style.borderLeft='1px solid red';
        document.querySelector('.avagoldcoin_AmountBuy').innerHTML=`&#36 0.0${avagoldcoinRandom}`;
        document.querySelector('.avagoldcoin_AmountBuy').style.color='red';

    }else{
        //avagoldcoin
        document.querySelector('.avagoldcoin_stickReadSell').style.bottom=`${avagoldcoinRandom}%`;
        document.querySelector('.avagoldcoin_stickReadSell').style.backgroundColor='green';
        document.querySelector('.avagoldcoin_stickSell').style.borderLeft='1px solid green';
        document.querySelector('.avagoldcoin_AmountSell').innerHTML=`&#36 0.0${avagoldcoinRandom}`;
        document.querySelector('.avagoldcoin_AmountSell').style.color='green';
        //
        document.querySelector('.avagoldcoin_stickReadBuy').style.bottom=`${avagoldcoinRandom}%`;
        document.querySelector('.avagoldcoin_stickReadBuy').style.backgroundColor='green';
        document.querySelector('.avagoldcoin_stickBuy').style.borderLeft='1px solid green';
        document.querySelector('.avagoldcoin_AmountBuy').innerHTML=`&#36 0.0${avagoldcoinRandom}`;
        document.querySelector('.avagoldcoin_AmountBuy').style.color='green';

    }
    

},4000)





















//IF THE VALUE ARE === TO NULL
localStorage.getItem('displayTapswapBuy')===null?localStorage.setItem('displayTapswapBuy','none'):'Escape';
localStorage.getItem('displayHamsterkonbatBuy')===null?localStorage.setItem('displayHamsterkonbatBuy','none'):'Escape';
localStorage.getItem('displayAquaprotocolBuy')===null?localStorage.setItem('displayAquaprotocolBuy','none'):'Escape';
localStorage.getItem('displayBlumBuy')===null?localStorage.setItem('displayBlumBuy','flex'):'Escape';
localStorage.getItem('displayMemefiBuy')===null?localStorage.setItem('displayMemefiBuy','flex'):'Escape';
localStorage.getItem('displaygemzcoinBuy')===null?localStorage.setItem('displaygemzcoinBuy','flex'):'Escape';
localStorage.getItem('displayloscoinBuy')===null?localStorage.setItem('displayloscoinBuy','flex'):'Escape';
localStorage.getItem('displaynotcoinBuy')===null?localStorage.setItem('displaynotcoinBuy','flex'):'Escape';
localStorage.getItem('displaytigernetworkBuy')===null?localStorage.setItem('displaytigernetworkBuy','flex'):'Escape';
localStorage.getItem('displaysimpletapBuy')===null?localStorage.setItem('displaysimpletapBuy','flex'):'Escape';
localStorage.getItem('displaykoloBuy')===null?localStorage.setItem('displaykoloBuy','flex'):'Escape';
localStorage.getItem('displaycashcoingameBuy')===null?localStorage.setItem('displaycashcoingameBuy','flex'):'Escape';
localStorage.getItem('displaydotcoinBuy')===null?localStorage.setItem('displaydotcoinBuy','flex'):'Escape';
localStorage.getItem('displaybbqcoinBuy')===null?localStorage.setItem('displaybbqcoinBuy','flex'):'Escape';
localStorage.getItem('displaycexoiBuy')===null?localStorage.setItem('displaycexoiBuy','flex'):'Escape';
localStorage.getItem('displayseedcoinBuy')===null?localStorage.setItem('displayseedcoinBuy','flex'):'Escape';
localStorage.getItem('displaypocketrocketBuy')===null?localStorage.setItem('displaypocketrocketBuy','flex'):'Escape';
localStorage.getItem('displayyescoinBuy')===null?localStorage.setItem('displayyescoinBuy','flex'):'Escape';
localStorage.getItem('displayavagoldcoinBuy')===null?localStorage.setItem('displayavagoldcoinBuy','flex'):'Escape';




//IF THE VALUE ARE === TO NULL
localStorage.getItem('displayTapswapSell')===null?localStorage.setItem('displayTapswapSell','flex'):'Escape';
localStorage.getItem('displayHamsterkonbatSell')===null?localStorage.setItem('displayHamsterkonbatSell','flex'):'Escape';
localStorage.getItem('displayAquaprotocolSell')===null?localStorage.setItem('displayAquaprotocolSell','flex'):'Escape';
localStorage.getItem('displayBlumSell')===null?localStorage.setItem('displayBlumSell','none'):'Escape';
localStorage.getItem('displayMemefiSell')===null?localStorage.setItem('displayMemefiSell','none'):'Escape';
localStorage.getItem('displaygemzcoinSell')===null?localStorage.setItem('displaygemzcoinSell','none'):'Escape';
localStorage.getItem('displayloscoinSell')===null?localStorage.setItem('displayloscoinSell','none'):'Escape';
localStorage.getItem('displaynotcoinSell')===null?localStorage.setItem('displaynotcoinSell','none'):'Escape';
localStorage.getItem('displaytigernetworkSell')===null?localStorage.setItem('displaytigernetworkSell','none'):'Escape';
localStorage.getItem('displaysimpletapSell')===null?localStorage.setItem('displaysimpletapSell','none'):'Escape';
localStorage.getItem('displaykoloSell')===null?localStorage.setItem('displaykoloSell','none'):'Escape';
localStorage.getItem('displaycashcoingameSell')===null?localStorage.setItem('displaycashcoingameSell','none'):'Escape';
localStorage.getItem('displaydotcoinSell')===null?localStorage.setItem('displaydotcoinSell','none'):'Escape';
localStorage.getItem('displaybbqcoinSell')===null?localStorage.setItem('displaybbqcoinSell','none'):'Escape';
localStorage.getItem('displaycexoiSell')===null?localStorage.setItem('displaycexoiSell','none'):'Escape';
localStorage.getItem('displayseedcoinSell')===null?localStorage.setItem('displayseedcoinSell','none'):'Escape';
localStorage.getItem('displaypocketrocketSell')===null?localStorage.setItem('displaypocketrocketSell','none'):'Escape';
localStorage.getItem('displayyescoinSell')===null?localStorage.setItem('displayyescoinSell','none'):'Escape';
localStorage.getItem('displayavagoldcoinSell')===null?localStorage.setItem('displayavagoldcoinSell','none'):'Escape';











//Buy
let tapswap_ContainerBuy=document.querySelector('.tapswap_ContainerBuy');
let hamsterkonbat_ContainerBuy=document.querySelector('.hamsterkonbat_ContainerBuy');
let aquaprotocol_ContainerBuy=document.querySelector('.aquaprotocol_ContainerBuy');
let blum_ContainerBuy=document.querySelector('.blum_ContainerBuy');
let memefi_ContainerBuy=document.querySelector('.memefi_ContainerBuy');
let gemzcoin_ContainerBuy=document.querySelector('.gemzcoin_ContainerBuy');
let loscoin_ContainerBuy=document.querySelector('.loscoin_ContainerBuy');
let notcoin_ContainerBuy=document.querySelector('.notcoin_ContainerBuy');
let tigernetwork_ContainerBuy=document.querySelector('.tigernetwork_ContainerBuy');
let simpletap_ContainerBuy=document.querySelector('.simpletap_ContainerBuy');
let kolo_ContainerBuy=document.querySelector('.kolo_ContainerBuy');
let cashcoingame_ContainerBuy=document.querySelector('.cashcoingame_ContainerBuy');
let dotcoin_ContainerBuy=document.querySelector('.dotcoin_ContainerBuy');
let bbqcoin_ContainerBuy=document.querySelector('.bbqcoin_ContainerBuy');
let cexoi_ContainerBuy=document.querySelector('.cexoi_ContainerBuy');
let seedcoin_ContainerBuy=document.querySelector('.seedcoin_ContainerBuy');
let pocketrocket_ContainerBuy=document.querySelector('.pocketrocket_ContainerBuy');
let yescoin_ContainerBuy=document.querySelector('.yescoin_ContainerBuy');
let avagoldcoin_ContainerBuy=document.querySelector('.avagoldcoin_ContainerBuy');


//Sell
let tapswap_ContainerSell=document.querySelector('.tapswap_ContainerSell');
let hamsterkonbat_ContainerSell=document.querySelector('.hamsterkonbat_ContainerSell');
let aquaprotocol_ContainerSell=document.querySelector('.aquaprotocol_ContainerSell');
let blum_ContainerSell=document.querySelector('.blum_ContainerSell');
let memefi_ContainerSell=document.querySelector('.memefi_ContainerSell');

let gemzcoin_ContainerSell=document.querySelector('.gemzcoin_ContainerSell');
let loscoin_ContainerSell=document.querySelector('.loscoin_ContainerSell');
let notcoin_ContainerSell=document.querySelector('.notcoin_ContainerSell');
let tigernetwork_ContainerSell=document.querySelector('.tigernetwork_ContainerSell');
let simpletap_ContainerSell=document.querySelector('.simpletap_ContainerSell');
let kolo_ContainerSell=document.querySelector('.kolo_ContainerSell');
let cashcoingame_ContainerSell=document.querySelector('.cashcoingame_ContainerSell');
let dotcoin_ContainerSell=document.querySelector('.dotcoin_ContainerSell');
let bbqcoin_ContainerSell=document.querySelector('.bbqcoin_ContainerSell');
let cexoi_ContainerSell=document.querySelector('.cexoi_ContainerSell');
let seedcoin_ContainerSell=document.querySelector('.seedcoin_ContainerSell');
let pocketrocket_ContainerSell=document.querySelector('.pocketrocket_ContainerSell');
let yescoin_ContainerSell=document.querySelector('.yescoin_ContainerSell');
let avagoldcoin_ContainerSell=document.querySelector('.avagoldcoin_ContainerSell');


setInterval(()=>{
    
    
    //Buy
    tapswap_ContainerBuy.style.display=localStorage.getItem('displayTapswapBuy');
    hamsterkonbat_ContainerBuy.style.display=localStorage.getItem('displayHamsterkonbatBuy');
    aquaprotocol_ContainerBuy.style.display=localStorage.getItem('displayAquaprotocolBuy');
    blum_ContainerBuy.style.display=localStorage.getItem('displayBlumBuy');
    memefi_ContainerBuy.style.display=localStorage.getItem('displayMemefiBuy');
    gemzcoin_ContainerBuy.style.display=localStorage.getItem('displaygemzcoinBuy');
    loscoin_ContainerBuy.style.display=localStorage.getItem('displayloscoinBuy');
    notcoin_ContainerBuy.style.display=localStorage.getItem('displaynotcoinBuy');
    tigernetwork_ContainerBuy.style.display=localStorage.getItem('displaytigernetworkBuy');
    simpletap_ContainerBuy.style.display=localStorage.getItem('displaysimpletapBuy');
    kolo_ContainerBuy.style.display=localStorage.getItem('displaykoloBuy');
    cashcoingame_ContainerBuy.style.display=localStorage.getItem('displaycashcoingameBuy');
    dotcoin_ContainerBuy.style.display=localStorage.getItem('displaydotcoinBuy');
    bbqcoin_ContainerBuy.style.display=localStorage.getItem('displaybbqcoinBuy');
    cexoi_ContainerBuy.style.display=localStorage.getItem('displaycexoiBuy');
    seedcoin_ContainerBuy.style.display=localStorage.getItem('displayseedcoinBuy');
    pocketrocket_ContainerBuy.style.display=localStorage.getItem('displaypocketrocketBuy');
    yescoin_ContainerBuy.style.display=localStorage.getItem('displayyescoinBuy');
    avagoldcoin_ContainerBuy.style.display=localStorage.getItem('displayavagoldcoinBuy');


    //Sell
    tapswap_ContainerSell.style.display=localStorage.getItem('displayTapswapSell');
    hamsterkonbat_ContainerSell.style.display=localStorage.getItem('displayHamsterkonbatSell');
    aquaprotocol_ContainerSell.style.display=localStorage.getItem('displayAquaprotocolSell');
    blum_ContainerSell.style.display=localStorage.getItem('displayBlumSell');
    memefi_ContainerSell.style.display=localStorage.getItem('displayMemefiSell');
    gemzcoin_ContainerSell.style.display=localStorage.getItem('displaygemzcoinSell');
    loscoin_ContainerSell.style.display=localStorage.getItem('displayloscoinSell');
    notcoin_ContainerSell.style.display=localStorage.getItem('displaynotcoinSell');
    tigernetwork_ContainerSell.style.display=localStorage.getItem('displaytigernetworkSell');
    simpletap_ContainerSell.style.display=localStorage.getItem('displaysimpletapSell');
    kolo_ContainerSell.style.display=localStorage.getItem('displaykoloSell');
    cashcoingame_ContainerSell.style.display=localStorage.getItem('displaycashcoingameSell');
    dotcoin_ContainerSell.style.display=localStorage.getItem('displaydotcoinSell');
    bbqcoin_ContainerSell.style.display=localStorage.getItem('displaybbqcoinSell');
    cexoi_ContainerSell.style.display=localStorage.getItem('displaycexoiSell');
    seedcoin_ContainerSell.style.display=localStorage.getItem('displayseedcoinSell');
    pocketrocket_ContainerSell.style.display=localStorage.getItem('displaypocketrocketSell');
    yescoin_ContainerSell.style.display=localStorage.getItem('displayyescoinSell');
    avagoldcoin_ContainerSell.style.display=localStorage.getItem('displayavagoldcoinSell');

    


},100)

//Buy
const x2BottomContainerLeft_buy=document.querySelectorAll('.x2BottomContainerLeft_buy');
x2BottomContainerLeft_buy.forEach((e)=>{
    e.addEventListener('click',()=>{
        let coinsName_dataDashed=e.dataset.id;

        let AmountBuy=document.querySelector(`.${coinsName_dataDashed}_AmountBuy`).innerText;
        let AmountBuyConvertToCoins=(Number(AmountBuy.slice(1,AmountBuy.length))*80000).toFixed(0);
        
        
        
        if(Number(localStorage.getItem('displayCoins'))>Number(AmountBuyConvertToCoins)){
            let getItem=Number(localStorage.getItem('displayCoins'));
            localStorage.setItem('displayCoins',getItem-Number(AmountBuyConvertToCoins))



            if(coinsName_dataDashed==='tapswap'){
                localStorage.setItem('displayTapswapBuy','none')
                localStorage.setItem('displayTapswapSell','flex')
            }else if(coinsName_dataDashed==='hamsterkonbat'){
                localStorage.setItem('displayHamsterkonbatBuy','none')
                localStorage.setItem('displayHamsterkonbatSell','flex')
            }else if(coinsName_dataDashed==='aquaprotocol'){
                localStorage.setItem('displayAquaprotocolBuy','none')
                localStorage.setItem('displayAquaprotocolSell','flex')
            }else if(coinsName_dataDashed==='blum'){
                localStorage.setItem('displayBlumBuy','none')
                localStorage.setItem('displayBlumSell','flex')
            }else if(coinsName_dataDashed==='memefi'){
                localStorage.setItem('displayMemefiBuy','none')
                localStorage.setItem('displayMemefiSell','flex')
            }else if(coinsName_dataDashed==='gemzcoin'){
                localStorage.setItem('displaygemzcoinBuy','none')
                localStorage.setItem('displaygemzcoinSell','flex')
            }else if(coinsName_dataDashed==='loscoin'){
                localStorage.setItem('displayloscoinBuy','none')
                localStorage.setItem('displayloscoinSell','flex')
            }else if(coinsName_dataDashed==='notcoin'){
                localStorage.setItem('displaynotcoinBuy','none')
                localStorage.setItem('displaynotcoinSell','flex')
            }else if(coinsName_dataDashed==='tigernetwork'){
                localStorage.setItem('displaytigernetworkBuy','none')
                localStorage.setItem('displaytigernetworkSell','flex')
            }else if(coinsName_dataDashed==='simpletap'){
                localStorage.setItem('displaysimpletapBuy','none')
                localStorage.setItem('displaysimpletapSell','flex')
            }else if(coinsName_dataDashed==='kolo'){
                localStorage.setItem('displaykoloBuy','none')
                localStorage.setItem('displaykoloSell','flex')
            }else if(coinsName_dataDashed==='cashcoingame'){
                localStorage.setItem('displaycashcoingameBuy','none')
                localStorage.setItem('displaycashcoingameSell','flex')
            }else if(coinsName_dataDashed==='dotcoin'){
                localStorage.setItem('displaydotcoinBuy','none')
                localStorage.setItem('displaydotcoinSell','flex')
            }else if(coinsName_dataDashed==='bbqcoin'){
                localStorage.setItem('displaybbqcoinBuy','none')
                localStorage.setItem('displaybbqcoinSell','flex')
            }else if(coinsName_dataDashed==='cexoi'){
                localStorage.setItem('displaycexoiBuy','none')
                localStorage.setItem('displaycexoiSell','flex')
            }else if(coinsName_dataDashed==='seedcoin'){
                localStorage.setItem('displayseedcoinBuy','none')
                localStorage.setItem('displayseedcoinSell','flex')
            }else if(coinsName_dataDashed==='pocketrocket'){
                localStorage.setItem('displaypocketrocketBuy','none')
                localStorage.setItem('displaypocketrocketSell','flex')
            }else if(coinsName_dataDashed==='yescoin'){
                localStorage.setItem('displayyescoinBuy','none')
                localStorage.setItem('displayyescoinSell','flex')
            }else if(coinsName_dataDashed==='avagoldcoin'){
                localStorage.setItem('displayavagoldcoinBuy','none')
                localStorage.setItem('displayavagoldcoinSell','flex')
            }
    

        }else{
            document.querySelector('.displayMessage').style.display='block';
            document.querySelector('.displayMessage').innerText='insufficient balance';
            setTimeout(()=>{
                document.querySelector('.displayMessage').style.display='none';
            },1000)
        }

        

        
    })
})



//Sell
const x2BottomContainerLeft_sell=document.querySelectorAll('.x2BottomContainerLeft_sell');
x2BottomContainerLeft_sell.forEach((e)=>{
    e.addEventListener('click',()=>{

        let coinsName_dataDashed=e.dataset.id;
        let AmountSell=document.querySelector(`.${coinsName_dataDashed}_AmountSell`).innerText;
        let AmountSellConvertToCoins=(Number(AmountSell.slice(1,AmountSell.length))*80000).toFixed(0);

        


        let getItem=Number(localStorage.getItem('displayCoins'));
        localStorage.setItem('displayCoins',getItem+Number(AmountSellConvertToCoins))
        

        if(coinsName_dataDashed==='tapswap'){
            localStorage.setItem('displayTapswapBuy','flex')
            localStorage.setItem('displayTapswapSell','none')
        }else if(coinsName_dataDashed==='hamsterkonbat'){
            localStorage.setItem('displayHamsterkonbatBuy','flex')
            localStorage.setItem('displayHamsterkonbatSell','none')
        }else if(coinsName_dataDashed==='aquaprotocol'){
            localStorage.setItem('displayAquaprotocolBuy','flex')
            localStorage.setItem('displayAquaprotocolSell','none')
        }else if(coinsName_dataDashed==='blum'){
            localStorage.setItem('displayBlumBuy','flex')
            localStorage.setItem('displayBlumSell','none')
        }else if(coinsName_dataDashed==='memefi'){
            localStorage.setItem('displayMemefiBuy','flex')
            localStorage.setItem('displayMemefiSell','none')
        }else if(coinsName_dataDashed==='gemzcoin'){
            localStorage.setItem('displaygemzcoinBuy','flex')
            localStorage.setItem('displaygemzcoinSell','none')
        }else if(coinsName_dataDashed==='loscoin'){
            localStorage.setItem('displayloscoinBuy','flex')
            localStorage.setItem('displayloscoinSell','none')
        }else if(coinsName_dataDashed==='notcoin'){
            localStorage.setItem('displaynotcoinBuy','flex')
            localStorage.setItem('displaynotcoinSell','none')
        }else if(coinsName_dataDashed==='tigernetwork'){
            localStorage.setItem('displaytigernetworkBuy','flex')
            localStorage.setItem('displaytigernetworkSell','none')
        }else if(coinsName_dataDashed==='simpletap'){
            localStorage.setItem('displaysimpletapBuy','flex')
            localStorage.setItem('displaysimpletapSell','none')
        }else if(coinsName_dataDashed==='kolo'){
            localStorage.setItem('displaykoloBuy','flex')
            localStorage.setItem('displaykoloSell','none')
        }else if(coinsName_dataDashed==='cashcoingame'){
            localStorage.setItem('displaycashcoingameBuy','flex')
            localStorage.setItem('displaycashcoingameSell','none')
        }else if(coinsName_dataDashed==='dotcoin'){
            localStorage.setItem('displaydotcoinBuy','flex')
            localStorage.setItem('displaydotcoinSell','none')
        }else if(coinsName_dataDashed==='bbqcoin'){
            localStorage.setItem('displaybbqcoinBuy','flex')
            localStorage.setItem('displaybbqcoinSell','none')
        }else if(coinsName_dataDashed==='cexoi'){
            localStorage.setItem('displaycexoiBuy','flex')
            localStorage.setItem('displaycexoiSell','none')
        }else if(coinsName_dataDashed==='seedcoin'){
            localStorage.setItem('displayseedcoinBuy','flex')
            localStorage.setItem('displayseedcoinSell','none')
        }else if(coinsName_dataDashed==='pocketrocket'){
            localStorage.setItem('displaypocketrocketBuy','flex')
            localStorage.setItem('displaypocketrocketSell','none')
        }else if(coinsName_dataDashed==='yescoin'){
            localStorage.setItem('displayyescoinBuy','flex')
            localStorage.setItem('displayyescoinSell','none')
        }else if(coinsName_dataDashed==='avagoldcoin'){
            localStorage.setItem('displayavagoldcoinBuy','flex')
            localStorage.setItem('displayavagoldcoinSell','none')
        }
        
    
    })
})







setInterval(()=>{
    //appearNumber1
    if(localStorage.getItem('boostValue')===null){
        localStorage.setItem('boostValue',1)
    
    }else if(document.querySelector('.appearNumber1').innerText !=`+${localStorage.
    getItem('boostValue')}`){

        document.querySelector('.appearNumber1').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber2').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber3').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber4').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber5').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber6').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber7').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber8').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber9').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber10').innerText=`+${localStorage.
        getItem('boostValue')}`;

        document.querySelector('.appearNumber11').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber12').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber13').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber14').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber15').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber16').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber17').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber18').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber19').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber20').innerText=`+${localStorage.
        getItem('boostValue')}`;


        document.querySelector('.appearNumber21').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber22').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber23').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber24').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber25').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber26').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber27').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber28').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber29').innerText=`+${localStorage.
        getItem('boostValue')}`;
        document.querySelector('.appearNumber30').innerText=`+${localStorage.
        getItem('boostValue')}`;


    }




    
},100)








//boostBoosterContainer
const boostBoosterContainer=document.querySelectorAll('.boostBoosterContainer');
boostBoosterContainer.forEach((e)=>{
    e.addEventListener('click',()=>{

        let dataDashed_Id=e.dataset.id;
        let Amount=e.dataset.amount;
        let AmountBuyConvertToCoins=(Number(Amount)*80000).toFixed(0);
        

        

        if(Number(localStorage.getItem('displayCoins'))>Number(AmountBuyConvertToCoins) && `+${localStorage.getItem('boostValue')}` != dataDashed_Id){
            let getItem=Number(localStorage.getItem('displayCoins'));
            localStorage.setItem('displayCoins',getItem-Number(AmountBuyConvertToCoins))

            localStorage.setItem('displayCoins',Number(localStorage.getItem('displayCoins'))+Number(localStorage.getItem('coinsCount')))

            localStorage.setItem('coinsCount',0)

            
            

            if(dataDashed_Id==='+2'){
                localStorage.setItem('boostValue',2)
            }else if(dataDashed_Id==='+3'){
                localStorage.setItem('boostValue',3)
            }else if(dataDashed_Id==='+4'){
                localStorage.setItem('boostValue',4)
            }else if(dataDashed_Id==='+5'){
                localStorage.setItem('boostValue',5)
            }


            localStorage.setItem('coinsContainerBottomI',0)
            localStorage.setItem('coinsContainerBottomII',0)
                    
            coinsContainer_coinsI.style.opacity=1;
            coinsContainer_coinsIII.style.opacity=1;
            coinsContainer_coinsV.style.opacity=1;
            coinsContainer_coinsVII.style.opacity=1;
            coinsContainer_coinsIX.style.opacity=1;
            coinsContainer_coinsII.style.opacity=1;
            coinsContainer_coinsIV.style.opacity=1;
            coinsContainer_coinsVI.style.opacity=1;
            coinsContainer_coinsVIII.style.opacity=1;
            coinsContainer_coinsX.style.opacity=1;
        }else{
            document.querySelector('.displayMessage').style.display='block';
            document.querySelector('.displayMessage').innerText='insufficient balance';
            setTimeout(()=>{
                document.querySelector('.displayMessage').style.display='none';
            },1000)
        }
        
    })
})




setInterval(()=>{
    if(screen.width >= 1100){
        document.querySelector('.firstPage_ContainerII').style.display='block';
    }else{
        document.querySelector('.firstPage_ContainerII').style.display='none';
    }


    if(localStorage.getItem('UserName') != null){
        document.querySelector('.userName_CD').style.display='none';
    }

},100)


setTimeout(()=>{
    document.querySelector('.firstPage_ContainerI').style.display='none'
},10000)





//userName_CB
document.querySelector('.userName_CB').addEventListener('click',()=>{
    
    
    //userName_CI
    if(document.querySelector('.userName_CI').value===''){
        document.querySelector('.userName_CI').style.boxShadow='0px 0px 4px red';
    }else{
        document.querySelector('.userName_CI').style.boxShadow='0px 0px 4px green';

        setTimeout(()=>{
            localStorage.setItem('UserName',document.querySelector('.userName_CI').value)
            document.querySelector('.userName_CI').style.boxShadow='0px 0px 2px  rgb(0, 0, 184)';
        },1000)
    }
    

})






let coinsContainer_coinsI=document.querySelector('.coinsContainer_coinsI');
let coinsContainer_coinsII=document.querySelector('.coinsContainer_coinsII');
let coinsContainer_coinsIII=document.querySelector('.coinsContainer_coinsIII');
let coinsContainer_coinsIV=document.querySelector('.coinsContainer_coinsIV');
let coinsContainer_coinsV=document.querySelector('.coinsContainer_coinsV');
let coinsContainer_coinsVI=document.querySelector('.coinsContainer_coinsVI');
let coinsContainer_coinsVII=document.querySelector('.coinsContainer_coinsVII');
let coinsContainer_coinsVIII=document.querySelector('.coinsContainer_coinsVIII');
let coinsContainer_coinsIX=document.querySelector('.coinsContainer_coinsIX');
let coinsContainer_coinsX=document.querySelector('.coinsContainer_coinsX');





//coinsContainer
setInterval(()=>{
    if(localStorage.getItem('coinsContainerBottomI')=== null || localStorage.getItem('coinsContainerBottomI') > 100){
        localStorage.setItem('coinsContainerBottomI',0)
        
        
        coinsContainer_coinsI.style.opacity=0;
        coinsContainer_coinsIII.style.opacity=0;
        coinsContainer_coinsV.style.opacity=0;
        coinsContainer_coinsVII.style.opacity=0;
        coinsContainer_coinsIX.style.opacity=0;
        

    }
    if(localStorage.getItem('coinsContainerBottomII')=== null || localStorage.getItem('coinsContainerBottomII') > 120){
        localStorage.setItem('coinsContainerBottomII',0)
        
        coinsContainer_coinsII.style.opacity=0;
        coinsContainer_coinsIV.style.opacity=0;
        coinsContainer_coinsVI.style.opacity=0;
        coinsContainer_coinsVIII.style.opacity=0;
        coinsContainer_coinsX.style.opacity=0;
        
    }


    coinsContainer_coinsI.style.bottom=`${Number(localStorage.getItem('coinsContainerBottomI'))+20}%`;
    coinsContainer_coinsIII.style.bottom=`${Number(localStorage.getItem('coinsContainerBottomI'))+20}%`;
    coinsContainer_coinsV.style.bottom=`${Number(localStorage.getItem('coinsContainerBottomI'))+20}%`;
    coinsContainer_coinsVII.style.bottom=`${Number(localStorage.getItem('coinsContainerBottomI'))}%`;
    coinsContainer_coinsIX.style.bottom=`${Number(localStorage.getItem('coinsContainerBottomI'))}%`;


    coinsContainer_coinsII.style.bottom=`${Number(localStorage.getItem('coinsContainerBottomII'))+20}%`;
    coinsContainer_coinsIV.style.bottom=`${Number(localStorage.getItem('coinsContainerBottomII'))+20}%`;
    coinsContainer_coinsVI.style.bottom=`${Number(localStorage.getItem('coinsContainerBottomII'))}%`;
    coinsContainer_coinsVIII.style.bottom=`${Number(localStorage.getItem('coinsContainerBottomII'))}%`;
    coinsContainer_coinsX.style.bottom=`${Number(localStorage.getItem('coinsContainerBottomII'))}%`;


    localStorage.setItem('coinsContainerBottomI',Number(localStorage.getItem('coinsContainerBottomI'))+10)
    localStorage.setItem('coinsContainerBottomII',Number(localStorage.getItem('coinsContainerBottomII'))+20)
    

    
    
},400)




















//toWallet
document.querySelector('.toWallet').addEventListener('click',()=>{

    //document.querySelector('.chooseWalletContainerDiv').style.display='block';

    document.querySelector('.displayMessage').style.display='block';
    document.querySelector('.displayMessage').innerText='coming soon!';
    setTimeout(()=>{
        document.querySelector('.displayMessage').style.display='none';
    },3000)

})







if(localStorage.getItem('Link_Id')===null){

    localStorage.setItem('Link_Id',`${crypto.randomUUID()}`)
}
document.querySelector('.inviteLink_divBotton').innerText=`https://t.me/Realcoingames_bot?${localStorage.getItem('Link_Id')}`;




//inviteLink_divCopyButton
document.querySelector('.inviteLink_divCopyButton').addEventListener('click',()=>{
    

    navigator.clipboard.writeText(`https://t.me/Realcoingames_bot?${localStorage.getItem('Link_Id')}`)
    document.querySelector('.copeid_Div').style.display='block';
    setTimeout(()=>{
    
        document.querySelector('.copeid_Div').style.display='none';
    },1000)

})











if(localStorage.getItem('AlreadyClaim')===null){
    localStorage.setItem('AlreadyClaim','NO')
    localStorage.setItem('referralsCount',0)
    sessionStorage.setItem('LinkArrayCount',0)
}




setInterval(()=>{

    if(sessionStorage.getItem('LinkArrayCount')<localStorage.getItem('Link_Count')){
        let linkHTml='';
        for(let i=0; i<localStorage.getItem('Link_Count'); i++){

            linkHTml+=`
            <div class="ReferralsClaim_Div">
                <p class="ReferralsClaim_DivName">${localStorage.getItem(`Link_form${(localStorage.getItem('Link_Count')-i)-1}`)}</p>
                <div class="ReferralsClaim_DivCoins">
                    <p class="ReferralsClaim_DivCoinsIcon"></p>
                    <p class="ReferralsClaim_DivCoinsAmount">+5,000</p>
                </div>
                <p class="ReferralsClaim_DivClaimButton DivClaimButton${(localStorage.getItem('Link_Count')-i)-1}" data-id="${(localStorage.getItem('Link_Count')-i)-1}">Claim</p>
            </div>`;

            sessionStorage.setItem('LinkArrayCount',i)
        }

        document.querySelector('.ReferralsClaim_DivContainer').innerHTML=linkHTml;
    }







    for(let i=0; i<localStorage.getItem('Link_Count'); i++){
        if(localStorage.getItem('AlreadyClaim').includes(`${i}`)){
            document.querySelector(`.DivClaimButton${i}`).style.display='none';
            
        }
    }

    if(localStorage.getItem('referralsCount') != null){
        document.querySelector('.realCoins_mainContainer_ref_HI').innerText=`${localStorage.getItem('referralsCount')} Referrals`;
    }
    
    

    

    const ReferralsClaim_DivClaimButton=document.querySelectorAll('.ReferralsClaim_DivClaimButton');
    ReferralsClaim_DivClaimButton.forEach((e)=>{
    e.addEventListener('click',()=>{
        let dataDashed_Id=e.dataset.id;

        

        if(localStorage.getItem('AlreadyClaim').includes(`${dataDashed_Id}`)===false){
            localStorage.setItem('AlreadyClaim',localStorage.getItem('AlreadyClaim')+`${dataDashed_Id}`)

            localStorage.setItem('referralsCount',`${Number(localStorage.getItem('referralsCount'))+1}`)

            localStorage.setItem('displayCoins',`${Number(localStorage.getItem('displayCoins'))+5000}`)
        }
        
        

        
        

        localStorage.setItem('coinsContainerBottomI',0)
        localStorage.setItem('coinsContainerBottomII',0)
                
        coinsContainer_coinsI.style.opacity=1;
        coinsContainer_coinsIII.style.opacity=1;
        coinsContainer_coinsV.style.opacity=1;
        coinsContainer_coinsVII.style.opacity=1;
        coinsContainer_coinsIX.style.opacity=1;
        coinsContainer_coinsII.style.opacity=1;
        coinsContainer_coinsIV.style.opacity=1;
        coinsContainer_coinsVI.style.opacity=1;
        coinsContainer_coinsVIII.style.opacity=1;
        coinsContainer_coinsX.style.opacity=1;

    })
})


},2000)







//chooseWalletContainer
const chooseWalletContainer=document.querySelectorAll('.chooseWalletContainer');
chooseWalletContainer.forEach((e)=>{
    e.addEventListener('click',()=>{
        let dataDashed_Id=e.dataset.id;

        if(dataDashed_Id==='Maxpro'){
            let url="https://t.me/Maxpro_wallet_bot";
            window.open(url,"_blank").focus();
        }else{
            document.querySelector('.displayMessage').style.display='block';
            document.querySelector('.displayMessage').innerText='you can only connect with Maxpro';
            setTimeout(()=>{
                document.querySelector('.displayMessage').style.display='none';
            },4000)
        }

    })
})

//openWalletTelegram_button
const openWalletTelegram_button=document.querySelector('.openWalletTelegram_button');
openWalletTelegram_button.addEventListener('click',()=>{
    document.querySelector('.displayMessage').style.display='block';
    document.querySelector('.displayMessage').innerText='Unknown Error!';
    setTimeout(()=>{
        document.querySelector('.displayMessage').style.display='none';
    },4000)
})

