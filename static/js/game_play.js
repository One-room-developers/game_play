window.onload =  main;

function main(){
      typing_episode()
  };

function typing_episode(){
  var typingClass = document.querySelector('.episode_text');
  var textView = document.querySelector('.text_view');
  var typingTxt = "\t얼음이 가득한 북부. 차게 핀 서리눈꽃이 숨죽여 떨어지는 곳."+ 
                  "\t거탑 2층의 외진 도시 테오존에서 당신은 태어났다.\n"+
                  "\t이곳의 사람들은 항상 굶주려있다. "+
                  "\t1년 중 농사를 지을 수 있는 기간은 얼음이 녹는 5-6개월 남짓이다."+
                  "\t테오존에서 울무를 설치하지 못하거나 쪽활로 짐승을 사냥하지 못하는 사람은 없다.\n"+
                  "\t당신만 빼고는 그렇다.\n"+
                  "\t당신은 어렸을 때 짐승에게 당해 세 손가락을 잃었다. 그때의 기억은 트라우마가 되어 당신은 사냥을 하지 못한다."+
                  "\t그러한 사람들은 모두 죽었기 때문이다. 농사철이 되면 모두 농사를 짓는다. 안정적인 수확을 낼 수 있는 수단이 존재한다는 사실."+
                  "\t이 얼마나 큰 축복인가.\n"+
                  "\t땅에 한기가 가득하기에 벼 대신 질긴 호밀을 심는다. 호밀로 만든 질기고 퀘퀘한 빵, 그 빵을 발효시킨 음료, 호밀을 발효시켜 만든 맥주."+
                  "\t이 도시는 고기와 호밀로 쌓아올려졌다고 봐도 무방하다."
  var splitTxt;
  var hotPoint = 0;
  var click = false;
  var typingIdx = 0;
  var height_multiple = 1;

  typingClass.innerHTML = "";

  splitTxt = typingTxt.split(""); // 한글자씩 잘라 배열로 저장한다.

  textView.addEventListener("click", function(){click = true});
  var typingBool = false;
  if(typingBool == false) {
    // 타이핑이 진행되지 않았다면
    typingBool = true;
    var tyInt = setInterval(typing , 30);
  }

  function typing(){
      //클릭을 했다면 탈출
      if(click === true){
      typingTxt = typingTxt.replace(/\t/g, "&nbsp;");
      typingTxt = typingTxt.replace(/\n/g, "<br><br>");
      typingClass.innerHTML = typingTxt;
      var location = textView.scrollHeight;
      textView.scrollTo({ top: location, behavior: "smooth" });
      clearInterval(tyInt);
    }
    //클릭을 안했다면 수행
    else{ 
      if(typingIdx < splitTxt.length) {
        // 타이핑될 텍스트 길이만큼 반복
        if(hotPoint !== 0){ 
          hotPoint -= 1;
        }
        else{
          if(splitTxt[typingIdx] === "\n"){
            typingClass.innerHTML += "<br><br>"
            hotPoint = 3; //온점이 나오면 2번의 반복 기간동안 쉼
          }
          else if(splitTxt[typingIdx] === "\t"){
            typingClass.innerHTML += "&nbsp;"
          }
          else{
            typingClass.innerHTML += splitTxt[typingIdx] 
          }
          typingIdx++;
          
          if(height_multiple === 1 && document.querySelector(".episode_text").clientHeight > document.querySelector(".text_view-main").clientHeight*height_multiple){
            height_multiple++;
            document.querySelector(".episode_text").style.height = `${document.querySelector(".text_view").clientHeight + document.querySelector(".text_view-main").clientHeight}px`;
            var location = textView.scrollHeight;
            textView.scrollTo({ top: location, behavior: "smooth" });
            hotPoint = 30;
          }
          else if(document.querySelector(".episode_text").scrollHeight-document.querySelector(".text_view-headder").clientHeight > document.querySelector(".text_view").clientHeight*height_multiple){
            height_multiple++;
            document.querySelector(".episode_text").style.height = `${document.querySelector(".text_view").clientHeight*height_multiple}px`
          }
        }

      }
      else {
        clearInterval(tyInt); //끝나면 반복종료
      }
    }
  }
}
  
  