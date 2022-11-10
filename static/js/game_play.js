window.onload =  main;

function main(){
      typing_episode()
  };

function typing_episode(){
  var index = 0;
  var episode_text = document.querySelector('.episode_text');
  var text_view = document.querySelector('.text_view');
  var main_text_view = document.querySelector('.text_view-main')
  var option_class = document.querySelector('.episode_option');
  var input_text = ["\t얼음이 가득한 북부. 차게 핀 서리눈꽃이 숨죽여 떨어지는 곳."+ 
                  "\t거탑 2층의 외진 도시 테오존에서 당신은 태어났다.\n"+
                  "\t이곳의 사람들은 항상 굶주려있다. "+
                  "\t1년 중 농사를 지을 수 있는 기간은 얼음이 녹는 5-6개월 남짓이다."+
                  "\t테오존에서 울무를 설치하지 못하거나 쪽활로 짐승을 사냥하지 못하는 사람은 없다.\n"+
                  "\t당신만 빼고 그렇다.\n"+
                  "\t당신은 어렸을 때 짐승에게 당해 세 손가락을 잃었다. 그때의 기억은 트라우마가 되어 당신은 사냥을 하지 못한다."+
                  "\t그러한 사람들은 모두 죽었기 때문이다. 농사철이 되면 모두 농사를 짓는다. 안정적인 수확을 낼 수 있는 수단이 존재한다는 사실."+
                  "\t이 얼마나 큰 축복인가.\n"+
                  "\t땅에 한기가 가득하기에 벼 대신 질긴 호밀을 심는다. 호밀로 만든 질기고 퀘퀘한 빵, 그 빵을 발효시킨 음료, 호밀을 발효시켜 만든 맥주."+
                  "\t이 도시는 고기와 호밀로 쌓아올려졌다고 봐도 무방하다."+
                  "\t얼음이 가득한 북부. 차게 핀 서리눈꽃이 숨죽여 떨어지는 곳."+ 
                  "\t거탑 2층의 외진 도시 테오존에서 당신은 태어났다.\n"+
                  "\t이곳의 사람들은 항상 굶주려있다. "+
                  "\t1년 중 농사를 지을 수 있는 기간은 얼음이 녹는 5-6개월 남짓이다."+
                  "\t테오존에서 울무를 설치하지 못하거나 쪽활로 짐승을 사냥하지 못하는 사람은 없다.\n"+
                  "\t당신만 빼고 그렇다.\n"+
                  "\t당신은 어렸을 때 짐승에게 당해 세 손가락을 잃었다. 그때의 기억은 트라우마가 되어 당신은 사냥을 하지 못한다."+
                  "\t그러한 사람들은 모두 죽었기 때문이다. 농사철이 되면 모두 농사를 짓는다. 안정적인 수확을 낼 수 있는 수단이 존재한다는 사실."+
                  "\t이 얼마나 큰 축복인가.\n"+
                  "\t땅에 한기가 가득하기에 벼 대신 질긴 호밀을 심는다. 호밀로 만든 질기고 퀘퀘한 빵, 그 빵을 발효시킨 음료, 호밀을 발효시켜 만든 맥주."+
                  "\t이 도시는 고기와 호밀로 쌓아올려졌다고 봐도 무방하다.",
                ]
  var input_option = [
    ["싸운다", "도망친다", "고함을 친다"]
  ];

  var input_result = [
    ["당신은 사투 끝에 블브를 죽이는데 성공했다. 하지만 남은 것은 상처뿐이었다. hp를 1 잃었다.", 

    "당신은 전력을 다해 도망쳤으나, 인간의 두 다리로 블브를 따돌리기란 어불성설이었다. 마을에 도달했을 때, 당신은 이미 상처투성이었다. hp를 2 잃었다.",

    "당신은 모습을 들어내지 않았다. 수풀에 몸을 숨긴 채 블브가 다가오길 기다렸다. 블브가 지척까지 다가왔을 때 당신은 고함을 질렀다."+
    "청력이 좋은 블브는 귀가 찢어지는 듯한 통증을 느끼며 깜짝 놀라 달아났다. 녀석이 있었던 자리엔 작은 금화 주머니 하나가 놓여져 있었다."+
    "당신은 주머니를 소매에 챙겼다. 금화를 5개 얻었다."
  ]
  ]

  var split_txt;
  var hot_point = 0;
  var click = false;
  var typingIdx = 0;
  var height_multiple = 1;
  var typingBool = false;
  var main_text_view_basic_size = main_text_view.clientHeight;

  split_txt = input_text[0].split(""); // 한글자씩 잘라 배열로 저장한다.
  text_view.addEventListener("click", function(){click = true});
  
  if(typingBool == false) {
    // 타이핑이 진행되지 않았다면
    typingBool = true;
    var tyInt = setInterval(typing , 5);
  }

  function typing(){
      //클릭을 했다면 탈출
    if(click === true){
      clearInterval(tyInt);
      input_text[0] = input_text[0].replace(/\t/g, "&nbsp;");
      input_text[0] = input_text[0].replace(/\n/g, "<br><br>");
      episode_text.innerHTML = input_text[0];
      option_on();
      moveScrollBottom();
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
          
          // if(((height_multiple === 1) && (episode_text.clientHeight > document.querySelector(".text_view-main").clientHeight))||
          // (height_multiple !== 1) && (text_view.scrollHeight > episode_text.clientHeight + document.querySelector(".text_view-header").clientHeight)){
          if(text_view.clientHeight*height_multiple < episode_text.clientHeight + document.querySelector(".text_view-header").clientHeight){
            episode_text.innerText = episode_text.innerText.slice(0,-1);
            main_text_view.style.height = `${(text_view.clientHeight*height_multiple + main_text_view_basic_size) }px`;
            moveScrollBottom();
            hot_point = 30;
            height_multiple++;
          }
        }
      }
      else {
        clearInterval(tyInt); //끝나면 반복종료
        option_on();
        moveScrollBottom();
      }
    }
  }

  
  function moveScrollBottom(){
    var location = text_view.scrollHeight;
    text_view.scrollTo({ top: location, behavior: "smooth" });
  }

  function option_on(){
    optionDiv = [];
    option_class.classList.remove("hidden");
    for(i=0; i<input_option[index].length; i++){
      optionDiv[i] = document.createElement('div');
      optionDiv[i].className = "option_div"
      optionDiv[i].innerText = input_option[index][i];
      // optionDiv[i].addEventListener('click', )
      option_class.appendChild(optionDiv[i]);
    }
  }

  function click_option(){

  }
}
  
