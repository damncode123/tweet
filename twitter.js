const tweetform=document.querySelector('#tweetForm');
const tweetconatiner=document.querySelector('ul');
tweetform.addEventListener('submit',(e)=>
{
   // console.log("hello");
    e.preventDefault();//important
   const usernameinput=tweetform.elements.username;
   const tweetinput=tweetform.elements.tweet;
   addTweet(usernameinput.value,tweetinput.value);
   usernameinput.value='';
   tweetinput.value='';

})
const addTweet= (username, tweet)=>
{
    const newtweet=document.createElement('li');
    const bTag=document.createElement('b');//creating bold tag itself
    bTag.append(username);//making user blod here
    newtweet.append(bTag);
    newtweet.append(`- ${tweet}`);
    tweetconatiner.append(newtweet);
}
