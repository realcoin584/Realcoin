let NewDate=31;
let DailyPin='222222'
let urlYutube1="https://www.youtube.com/@Realcoingames_bot";
let urlYutube2="https://www.youtube.com/@Realcoingames_bot";
let dailyTaskLink="https://www.youtube.com/@Realcoingames_bot";

let youtube1_title="vitalik buterin's very unpopular movemove";
let youtube2_title="vitalik buterin's very unpopular movemove";







document.querySelector('.youtube1_title').innerText=`${youtube1_title}`;
document.querySelector('.youtube2_title').innerText=`${youtube2_title}`;


if( `${new Date().getDate()}`===`${NewDate}` && localStorage.getItem("confirmDate") != NewDate){
    localStorage.setItem("yutube1","newDate")
    localStorage.setItem("yutube2","newDate")
    localStorage.setItem("dailyTasks","newDate")
    localStorage.setItem('dailyReward','newDate')
    

    
    localStorage.setItem("confirmDate",NewDate)


    document.querySelector('.yutube1clickSign').style.display='flex';
    document.querySelector('.yutube1clickSign_div').style.backgroundColor=' rgb(0, 0, 82)';
    document.querySelector('.yutube2clickSign').style.display='flex';
    document.querySelector('.yutube2clickSign_div').style.backgroundColor=' rgb(0, 0, 82)';
    document.querySelector('.dailyRewardclickSign').style.display='flex';
    document.querySelector('.dailyRewardclickSign_div').style.backgroundColor=' rgb(0, 0, 82)';
    
}

if(localStorage.getItem("telegram1")===null){
    localStorage.setItem("telegram1","newDate")
    localStorage.setItem("telegram2","newDate")
    localStorage.setItem("twiter","newDate")
    localStorage.setItem("instagram","newDate")
    localStorage.setItem("tiktok","newDate")
}
if(localStorage.getItem("telegram2")===null){
    localStorage.setItem("telegram2","newDate")
}
if(localStorage.getItem("twiter")===null){
    localStorage.setItem("twiter","newDate")
}
if(localStorage.getItem("instagram")===null){
    localStorage.setItem("instagram","newDate")
}
if(localStorage.getItem("tiktok")===null){
    localStorage.setItem("tiktok","newDate")
}

//JoinOurLinkContainer
const JoinOurLinkContainer=document.querySelectorAll('.JoinOurLinkContainer');
JoinOurLinkContainer.forEach((e)=>{
    e.addEventListener('click',()=>{

        let dataDashed_Id=e.dataset.id;
        let getItem=Number(localStorage.getItem('displayCoins'));

        if(dataDashed_Id==="yutube1" && localStorage.getItem("yutube1") === "newDate" && `${new Date().getDate()}`===`${NewDate}`){
            localStorage.setItem("yutube1","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+100000);

            
            window.open(urlYutube1,"_blank").focus();

        }else if(dataDashed_Id==="yutube2" && localStorage.getItem("yutube2") === "newDate" && `${new Date().getDate()}`===`${NewDate}`){
            localStorage.setItem("yutube2","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+100000);
            
            
            window.open(urlYutube2,"_blank").focus();

        }else if(dataDashed_Id==="dailyTasks" && localStorage.getItem("dailyTasks")=== "newDate" && `${new Date().getDate()}`===`${NewDate}`){
            localStorage.setItem("dailyTasks","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+500);

        }else if(dataDashed_Id==="telegram1" && localStorage.getItem("telegram1") === "newDate" && `${new Date().getDate()}`===`${NewDate}`){
            localStorage.setItem("telegram1","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+5000);
            
            let url="https://t.me/+S1yOOvjloYdlNzE8";
            window.open(url,"_blank").focus();

        }else if(dataDashed_Id==="telegram2" && localStorage.getItem("telegram2") === "newDate" && `${new Date().getDate()}`===`${NewDate}`){
            localStorage.setItem("telegram2","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+5000);
            
            let url="https://t.me/+_OFbXzfb5uVlMmY8";
            window.open(url,"_blank").focus();

        }else if(dataDashed_Id==="twiter" && localStorage.getItem("twiter") === "newDate" && `${new Date().getDate()}`===`${NewDate}`){
            localStorage.setItem("twiter","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+5000);
            
            let url="https://x.com/Realcoin_bot?t=Y7ObBl6gfKo2ZX8hVJ-d9A&s=09";
            window.open(url,"_blank").focus();

        }else if(dataDashed_Id==="instagram" && localStorage.getItem("instagram") === "newDate" && `${new Date().getDate()}`===`${NewDate}`){
            localStorage.setItem("instagram","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+5000);
            
            let url="https://www.instagram.com/realcoingame_bot?igsh=YWRzbjBqY3dyeHZq";
            window.open(url,"_blank").focus();

        }else if(dataDashed_Id==="tiktok" && localStorage.getItem("tiktok") === "newDate" && `${new Date().getDate()}`===`${NewDate}`){
            localStorage.setItem("tiktok","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+5000);
            
            
            

        }else{

            if(dataDashed_Id==="dailyTasks" && localStorage.getItem("dailyTasks")=== "AlreadyClick" && `${new Date().getDate()}`===`${NewDate}`){

                /*SET DATE TIME*/
                document.querySelector('.displayMessage').style.display='block';
                document.querySelector('.displayMessage').innerText='you are already get your daily reward';
                setTimeout(()=>{
                    document.querySelector('.displayMessage').style.display='none';
                },2000)
                //End sub
            }else if(dataDashed_Id==="yutube1" && localStorage.getItem("yutube1")=== "AlreadyClick" && `${new Date().getDate()}`===`${NewDate}` || dataDashed_Id==="yutube2" && localStorage.getItem("yutube2")=== "AlreadyClick" && `${new Date().getDate()}`===`${NewDate}` || dataDashed_Id==="telegram1" && localStorage.getItem("telegram1")=== "AlreadyClick" && `${new Date().getDate()}`===`${NewDate}` || dataDashed_Id==="telegram2" && localStorage.getItem("telegram2")=== "AlreadyClick" && `${new Date().getDate()}`===`${NewDate}` || dataDashed_Id==="twiter" && localStorage.getItem("twiter")=== "AlreadyClick" && `${new Date().getDate()}`===`${NewDate}` || dataDashed_Id==="instagram" && localStorage.getItem("instagram")=== "AlreadyClick" && `${new Date().getDate()}`===`${NewDate}` || dataDashed_Id==="tiktok" && localStorage.getItem("tiktok")=== "AlreadyClick" && `${new Date().getDate()}`===`${NewDate}`){

                /*SET DATE TIME*/
                document.querySelector('.displayMessage').style.display='block';
                document.querySelector('.displayMessage').innerText='you are already get your reward';
                setTimeout(()=>{
                    document.querySelector('.displayMessage').style.display='none';
                },2000)
                //End sub
            }else{

                /*SET DATE TIME*/
                document.querySelector('.displayMessage').style.display='block';
                document.querySelector('.displayMessage').innerText='set date and time!';
                setTimeout(()=>{
                    document.querySelector('.displayMessage').style.display='none';
                },2000)
                //End sub
            }
            
        }




    })
})











setInterval(() => {
    
    if(localStorage.getItem("yutube1")==="AlreadyClick"){
        document.querySelector('.yutube1clickSign').style.display='none';
        document.querySelector('.yutube1clickSign_div').style.backgroundColor='rgb(0, 0, 29)';
    }
    if(localStorage.getItem("yutube2")==="AlreadyClick"){
        document.querySelector('.yutube2clickSign').style.display='none';
        document.querySelector('.yutube2clickSign_div').style.backgroundColor='rgb(0, 0, 29)';
    }
    if(localStorage.getItem("dailyTasks")==="AlreadyClick"){
        document.querySelector('.dailyRewardclickSign').style.display='none';
        document.querySelector('.dailyRewardclickSign_div').style.backgroundColor='rgb(0, 0, 29)';
    }
    if(localStorage.getItem("telegram1")==="AlreadyClick"){
        document.querySelector('.telegramChannelClickSign').style.display='none';
        document.querySelector('.telegramChannelClickSign_div').style.backgroundColor='rgb(0, 0, 29)';
    }
    if(localStorage.getItem("telegram2")==="AlreadyClick"){
        document.querySelector('.telegramGroupClickSign').style.display='none';
        document.querySelector('.telegramGroupClickSign_div').style.backgroundColor='rgb(0, 0, 29)';
    }
    if(localStorage.getItem("twiter")==="AlreadyClick"){
        document.querySelector('.XClickSign').style.display='none';
        document.querySelector('.XClickSign_div').style.backgroundColor='rgb(0, 0, 29)';
    }
    if(localStorage.getItem("instagram")==="AlreadyClick"){
        document.querySelector('.instagramClickSign').style.display='none';
        document.querySelector('.instagramClickSign_div').style.backgroundColor='rgb(0, 0, 29)';
    }
    if(localStorage.getItem("tiktok")==="AlreadyClick"){
        document.querySelector('.tiktokClickSign').style.display='none';
        document.querySelector('.tiktokClickSign_div').style.backgroundColor='rgb(0, 0, 29)';
    }

    //////////
    if(localStorage.getItem("dailyReward") === "AlreadyClick"){
        
        document.querySelector('.dailyTasksubmitButton').style.opacity=0.5;
        document.querySelector('.dailyTaskFinishMissionButton').style.opacity=1;
        document.querySelector('.dailyTaskFinishMissionButton_p').style.display='block';
        document.querySelector('.dailyTaskinput').style.display='none';

    }else if(localStorage.getItem("dailyReward") === "confirmClick"){

        document.querySelector('.dailyTasksubmitButton').style.opacity=0.5;
        document.querySelector('.dailyTaskFinishMissionButton').style.opacity=0.5;
        document.querySelector('.dailyTaskFinishMissionButton_p').style.display='none';
        document.querySelector('.dailyTaskinput').style.display='none';
    }


},100);

















let dailyTaskinput=document.querySelector('.dailyTaskinput');

document.querySelector('.dailyTasksubmitButton').addEventListener('click',()=>{
    
    
    if(DailyPin===dailyTaskinput.value && localStorage.getItem("dailyReward") === "newDate"){
        
        document.querySelector('.dailyTaskinput').style.boxShadow='0px 0px 4px green';
        setTimeout(()=>{
            localStorage.setItem('dailyReward','AlreadyClick')
        },1000)
        
        
    }else{

        
        document.querySelector('.displayMessage').style.display='block';
        document.querySelector('.displayMessage').innerText='invalid answer';
        document.querySelector('.dailyTaskinput').style.boxShadow='0px 0px 4px red';
        setTimeout(()=>{
            document.querySelector('.displayMessage').style.display='none';
        },1000)

    }
})



document.querySelector('.dailyTaskFinishMissionButton_p').addEventListener('click',()=>{

    if(localStorage.getItem("dailyReward") === "AlreadyClick"){
        localStorage.setItem('dailyReward','confirmClick')

        localStorage.setItem('displayCoins',Number(localStorage.getItem('displayCoins'))+400000)



        document.querySelector('.dailyTaskFinishMissionButton').style.opacity=0.5;
        document.querySelector('.dailyTaskFinishMissionButton_p').style.display='none';
        document.querySelector('.dailyTaskinput').style.display='none';


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










//dailyTaskWatchDiv
document.querySelector('.dailyTaskWatchDiv').addEventListener('click',()=>{
    window.open(dailyTaskLink,"_blank").focus();
})


