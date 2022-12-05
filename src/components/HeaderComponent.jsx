import React from 'react';

function HeaderComponent(props){
  const {imgSrc, imgAlt} = props;

  
  const [addClass1, setAddClass1] = React.useState(false);
  const [addClass2, setAddClass2] = React.useState(false);
  const [addClass3, setAddClass3] = React.useState(false);
  const [addClass4, setAddClass4] = React.useState(false);
  
  
  
  // const [addClass, setAddClass] = React.useState({
  //   addClass1:false,
  //   addClass2:false,
  //   addClass3:false,
  //   addClass4:false,
  // });

  // const [] = addClass;



  const onMouseLeave =()=>{
    setAddClass1(false);
    setAddClass2(false);
    setAddClass3(false);
    setAddClass4(false);

  }

  const onMouseEnter1 =()=>{
    setAddClass1(true);
    setAddClass2(false);
    setAddClass3(false);
    setAddClass4(false);

  }
  const onMouseEnter2 =()=>{
    setAddClass2(true);
    setAddClass1(false);
    setAddClass3(false);
    setAddClass4(false);
  }
  const onMouseEnter3 =()=>{
    setAddClass3(true);
    setAddClass1(false);
    setAddClass2(false);
    setAddClass4(false);
  }
  const onMouseEnter4 =()=>{
    setAddClass4(true);
    setAddClass1(false);
    setAddClass2(false);
    setAddClass3(false);
  }

  return (
    <header id="header">
    <div className="left">
      <h1><a href="./index.html" title="HOME"><img src={imgSrc} alt={imgAlt} /></a></h1>
    </div>
    <div className="right">
      <nav 
      onMouseLeave = {onMouseLeave}
      id="nav" >
        <ul>
          <li>
              <a 
              onMouseEnter = {onMouseEnter1}
              className = {`main-btn ${addClass1 && 'on'}`}
              // className = {addClass1 ? 'main-btn' : 'main-btn on'}
              href="!#" 
              title="재단소개">재단소개</a>
              <div className={`sub sub1 ${addClass1 && 'on'}`}>
              {/* <div className={addClass1 ? 'sub sub1' : 'sub sub1 on'}> */}
                <div className="container">
                  <ul>
                    <li> 
                      <ul>
                        <li><a href="!#" title="설립취지">설립취지</a></li>
                        <li><a href="!#" title="연혁">연혁</a></li>
                        <li><a href="!#" title="찾아오시는길">찾아오시는길</a></li>
                      </ul>
                    </li>
                    <li> 
                      <ul>
                        <li><a href="!#">서브메뉴1</a></li>
                        <li><a href="!#">서브메뉴2</a></li>
                        <li><a href="!#">서브메뉴3</a></li>
                      </ul>                      
                    </li>
                    <li> 
                      <ul>
                        <li><a href="!#">서브메뉴1</a></li>
                        <li><a href="!#">서브메뉴2</a></li>
                        <li><a href="!#">서브메뉴3</a></li>
                      </ul>                      
                    </li>
                    <li>
                      <ul>
                        <li><a href="!#">서브메뉴1</a></li>
                        <li><a href="!#">서브메뉴2</a></li>
                        <li><a href="!#">서브메뉴3</a></li>
                      </ul>                      
                    </li>
                  </ul>
                </div>
              </div>
          </li>
          <li>
              <a 
              href="!#" 
              onMouseEnter = {onMouseEnter2}
              className = {`main-btn ${addClass2 && 'on'}`}
              title="후원하기">후원하기</a>
              <div className={`sub sub2 ${addClass2 && 'on'}`}>
                <div className="container">
                  <ul>
                    <li>
                      <ul>
                        <li><a href="!#" title='국내후원'>국내후원</a></li>
                        <li><a href="!#" title='국외후원'>국외후원</a></li>
                        <li><a href="!#" title='맞춤후원'>맞춤후원</a></li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li><a href="!#">서브메뉴1</a></li>
                        <li><a href="!#">서브메뉴2</a></li>
                        <li><a href="!#">서브메뉴3</a></li>
                      </ul>                      
                    </li>
                    <li>
                      <ul>
                        <li><a href="!#">서브메뉴1</a></li>
                        <li><a href="!#">서브메뉴2</a></li>
                        <li><a href="!#">서브메뉴3</a></li>
                      </ul>                      
                    </li>
                    <li>
                      <ul>
                        <li><a href="!#">서브메뉴1</a></li>
                        <li><a href="!#">서브메뉴2</a></li>
                        <li><a href="!#">서브메뉴3</a></li>
                      </ul>                      
                    </li>
                  </ul>
                </div>
              </div>
          </li>
          <li>
              <a 
              href="!#" 
              onMouseEnter = {onMouseEnter3}
              className = {`main-btn ${addClass3 && 'on'}`}
              title="자료실">자료실</a>
              <div className={`sub sub3 ${addClass3 && 'on'}`}>
                <div className="container">
                  <ul>
                    <li>
                      <ul>
                        <li><a href="!#" title="서식자료실">서식자료실</a></li>
                        <li><a href="!#" title="사진자료실">사진자료실</a></li>
                        <li><a href="!#" title="후원양식">후원양식</a></li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li><a href="!#">서브메뉴1</a></li>
                        <li><a href="!#">서브메뉴2</a></li>
                        <li><a href="!#">서브메뉴3</a></li>
                      </ul>                      
                    </li>
                    <li>
                      <ul>
                        <li><a href="!#">서브메뉴1</a></li>
                        <li><a href="!#">서브메뉴2</a></li>
                        <li><a href="!#">서브메뉴3</a></li>
                      </ul>                      
                    </li>
                    <li>
                      <ul>
                        <li><a href="!#">서브메뉴1</a></li>
                        <li><a href="!#">서브메뉴2</a></li>
                        <li><a href="!#">서브메뉴3</a></li>
                      </ul>                      
                    </li>
                  </ul>
                </div>
              </div>
          </li>
          <li>
              <a 
              href="!#"
              onMouseEnter = {onMouseEnter4}
              className = {`main-btn ${addClass4 && 'on'}`}
              title="스토리">스토리</a>
              <div className={`sub sub4 ${addClass4 && 'on'}`}>
                <div className="container">
                  <ul>
                    <li>
                      <ul>
                        <li><a href="!#" title="웹진">웹진</a></li>
                        <li><a href="!#" title="보고서">보고서</a></li>
                        <li><a href="!#" title="나의후원">나의후원</a></li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li><a href="!#">서브메뉴1</a></li>
                        <li><a href="!#">서브메뉴2</a></li>
                        <li><a href="!#">서브메뉴3</a></li>
                      </ul>                      
                    </li>
                    <li>
                      <ul>
                        <li><a href="!#">서브메뉴1</a></li>
                        <li><a href="!#">서브메뉴2</a></li>
                        <li><a href="!#">서브메뉴3</a></li>
                      </ul>                      
                    </li>
                    <li>
                      <ul>
                        <li><a href="!#">서브메뉴1</a></li>
                        <li><a href="!#">서브메뉴2</a></li>
                        <li><a href="!#">서브메뉴3</a></li>
                      </ul>                      
                    </li>
                  </ul>
                </div>
              </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  );
};

HeaderComponent.defaultProps = {
  imgSrc : 'images/logo.png',
  imgAlt : 'Green복지재단 Logo',
}

export default HeaderComponent;