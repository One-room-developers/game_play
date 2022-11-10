window.onload =  main;

function main(){
      typing_episode()
  };

function typing_episode(){
  var episode_text = document.querySelector('.episode_text');
  var text_view = document.querySelector('.text_view');
  var main_text_view = document.querySelector('.text_view-main')
  var option_class = document.querySelector('.episode_option');
  var input_text = "\t얼음이 가득한 북부. 차게 핀 서리눈꽃이 숨죽여 떨어지는 곳."+ 
                  "\t거탑 2층의 외진 도시 테오존에서 당신은 태어났다.\n"+
                  "\t이곳의 사람들은 항상 굶주려있다. "+
                  "\t1년 중 농사를 지을 수 있는 기간은 얼음이 녹는 5-6개월 남짓이다."+
                  "\t테오존에서 울무를 설치하지 못하거나 쪽활로 짐승을 사냥하지 못하는 사람은 없다.\n"+
                  "\t당신만 빼고 그렇다.\n"+
                  "\t당신은 어렸을 때 짐승에게 당해 세 손가락을 잃었다. 그때의 기억은 트라우마가 되어 당신은 사냥을 하지 못한다."+
                  "\t그러한 사람들은 모두 죽었기 때문이다. 농사철이 되면 모두 농사를 짓는다. 안정적인 수확을 낼 수 있는 수단이 존재한다는 사실."+
                  "\t이 얼마나 큰 축복인가.\n"+
                  "\t땅에 한기가 가득하기에 벼 대신 질긴 호밀을 심는다. 호밀로 만든 질기고 퀘퀘한 빵, 그 빵을 발효시킨 음료, 호밀을 발효시켜 만든 맥주."+
                  "\t이 도시는 고기와 호밀로 쌓아올려졌다고 봐도 무방하다."

  var episode_option = ["좀더 들어볼까?", "참 괜찮은 이야기군"];
  var split_txt;
  var hot_point = 0;
  var click = false;
  var typingIdx = 0;
  var height_multiple = 1;
  var typingBool = false;

  split_txt = input_text.split(""); // 한글자씩 잘라 배열로 저장한다.
  text_view.addEventListener("click", function(){click = true});
  
  if(typingBool == false) {
    // 타이핑이 진행되지 않았다면
    typingBool = true;
    var tyInt = setInterval(typing , 30);
  }

  function typing(){
      //클릭을 했다면 탈출
    if(click === true){
      input_text = input_text.replace(/\t/g, "&nbsp;");
      input_text = input_text.replace(/\n/g, "<br><br>");
      episode_text.innerHTML = input_text;
      option_class.classList.remove("hidden");
      moveScrollBottom();
      clearInterval(tyInt);
    }
    //클릭을 안했다면 수행
    else{ 
      if(typingIdx < split_txt.length) {
        // 타이핑될 텍스트 길이만큼 반복
        if(hot_point !== 0){ 
          hot_point -= 1;
        }
        else{
          if(split_txt[typingIdx] === "\n"){
            episode_text.innerHTML += "<br><br>"
            hot_point = 3; //온점이 나오면 2번의 반복 기간동안 쉼
          }
          else if(split_txt[typingIdx] === "\t"){
            episode_text.innerHTML += "&nbsp;"
          }
          else{
            episode_text.innerHTML += split_txt[typingIdx] 
          }
          typingIdx++;
          
          if(height_multiple === 1 && episode_text.clientHeight > main_text_view.clientHeight*height_multiple){
            height_multiple++;
            episode_text.style.height = `${text_view.clientHeight + main_text_view.clientHeight}px`;
            moveScrollBottom();
            episode_text.innerHTML += '<br>'
            hot_point = 30;
          }
          else if(episode_text.scrollHeight-document.querySelector(".text_view-headder").clientHeight > text_view.clientHeight*height_multiple){
            height_multiple++;
            episode_text.style.height = `${text_view.clientHeight*height_multiple}px`
          }
        }

      }
      else {
        clearInterval(tyInt); //끝나면 반복종료
        episode_text.style.height = 'auto';
        option_class.classList.remove("hidden");
        moveScrollBottom();
      }
    }
  }
  
  function moveScrollBottom(){
    var location = text_view.scrollHeight;
    text_view.scrollTo({ top: location, behavior: "smooth" });
  }
}
  
