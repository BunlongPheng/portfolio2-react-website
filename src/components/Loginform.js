import React,  { useState, useEffect} from 'react';
import styled from 'styled-components';
import mapssLogo from '../img/MAPSS-Logo.png';
import background1 from '../img/login-background.jpg';
import background2 from '../img/sidepage-help2.jpg';
import background3 from '../img/service.jpg';
import variables from '../abstracts/variables';
import { Link } from 'react-router-dom';
import { device } from '../abstracts/mediaQueries';
import { Fragment } from 'react';

const StyledSection = styled.section`
  width: 80%;
  height: 95rem;
  margin: 2rem auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 1rem;
  overflow: hidden;

  @media ${device.laptopL} {
    height: 80rem;
  }  

  .content {
    width: 35%;
    height: 100%;
    background-color: #FFF;
    display: inline-block;
    position: relative;
    vertical-align: top;

    @media ${device.mobileXL} {
    width: 100%;
    }

    &__box {
      width: 65%;
      height: 90%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .logo-box {
    height: 40%;
    width: 100%;
    position: relative;

    @media ${device.laptopL} {
      height: 30%;;
    }

    &__img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
      position: absolute;
      left 50%;
      transform: translateX(-50%);
    }
  }

  .input__form {
    &--label {
      display: block;
    }
  }

  .input-group {
    margin: 2rem 0;
    border-radius: 0.5rem;
  }

  .input {
    width: 100%;
    height: 4rem;
    border-radius: 0.5rem;
    border: 1px solid #ced4da;
    padding-left: 0.5rem;
      
    &:focus {
      outline: none;
      border: 2px solid ${variables.colorPrimary};
    }
  }

  label {
    color: #757171;
    margin-bottom: 0.5rem;
  }

  .link {
    display: inline-block;
    float: right;
  }

  a{
    color: #4164e3;
    text-decoration: none;
  }

  .form__checkbox-group {
    font-size: 1.3rem;
  }

.button {
  width: 100%;
  height: 6rem;
  margin: 1rem 0;
  background-color: #4164e3;
  color: #FFF;
  font-size: 1.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(black, 0.3);
    opacity: 0.8;
  }

  &:active {
    transform: translateY(0.1rem);
  }
}

  .footer {
    color: #757171;
    margin: 3rem 0;
    text-align: center;
    font-size: 1.3rem
  }



  .img-group {
    width: 65%;
    height: 100%;
    display: inline-block;
    vertical-align: top;


    @media ${device.mobileXL} {
    display: none;
    }
  }

  .img-box {
    height: 75%;
    width: 100%;
    overflow: hidden;
    object-position: 50% 50%;
  }

  .img {
    max-height: 150%;
    width: auto;
    object-fit: cover;
    position: relative;
    display: inline-block;
    
  }

  .img-shade {
    height: 100%;
    width: 100%;
    
    opacity: 1;
  }

  .text-box {
    height: 25%;
    width: 100%;
    padding: 2rem 5rem;
    background-color: #0034f2;
  }

  .heading-tertiary-white--main {
    text-align: center;
    font-size: 2rem;
    padding: 1rem;
  }

  .text {
    text-align: center;
    color: #b3b1b1;
  }

  .arrow {
    font-size: 4rem;
    position: absolute;
    padding: 0 1.5rem;
    top: 1rem;
    left: 1rem;
    transition: all .2s;
    border-radius: 1rem;
    z-index: 2;

    &:hover {
      transform: translateY(-0.2rem);
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }

    &:active {
      transform: translateY(0.2rem);
      box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    }
  }
`;

const backgroundImgs = [
  {
    img: background1,
  },
  {
    img: background2,
  },
  {
    img: background3,
  },
];
const API = process.env.REACT_APP_API;

const LoginComponents = (props) => {
  const [curImgNum, setCurImgNum] = useState(0);
  const backgroundImg = backgroundImgs[curImgNum].img;

  const [verify, setVerify] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  

  
//COntrol the image
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (curImgNum >= backgroundImgs.length - 1) {
        setCurImgNum(0);
      } else {
        setCurImgNum(curImgNum + 1);
      }
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [curImgNum]);

  
  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          verify,
          name,
          email,
          password
        }),
      });
      const registerData=await res.json(); 
      return(console.log(registerData))
  };
 
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,password
        }),
      });
      const loginData=await res.json(); 
      return(console.log(loginData))
  };
    
 
  
  /*const inputGroupJSX = props.inputGroup.map((data, key) => {
    return (
      <div className="input-group" key={key}>
        <label className="input__form--label" htmlFor={data}>
          {data}
        </label>
        key is 0,1,2,3 
        data is "verify", name ,email and password 
        <input
          required
          type={data === 'email' || data === 'password' ? data : 'text'}
          className="input"
          id={data}
          onChange={handleChanges(key)}
          
          ></input>
      </div>
      
    );
    
  });*/
 
  return (
    <StyledSection className="wrapper">
      <div className="content">
        <Link to="/" className="arrow">
          &#8617;
        </Link>
        <div className="content__box">
          <div className="logo-box">
            <img className="logo-box__img" src={mapssLogo} alt="company-logo" />
          </div>
          
          {/*<form onSubmit={inputGroupJSX.length==2?handleLogin:handleRegister} className="login-form">
            {inputGroupJSX}
            */}
          
           <form onSubmit={props.type !== 'Create'?handleLogin:handleRegister}>  

           {props.type !== 'Create' ? (
             <Fragment>
              <div className="input-group">
              <label className="input__form--label"> Email</label>
              <input className="input"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoFocus
              />
            </div>
            <div className="input-group">
              <label className="input__form--label">Password</label>
              <input className="input"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            
              />
            </div>
            </Fragment>

           )
            :(
              <Fragment>
                <div className="input-group">
            <label className="input__form--label"> Verification Number</label>
            <input className="input"
              type="text"
              onChange={(e) => setVerify(e.target.value)}
              value={verify}
              autoFocus
            />
          </div>
          <div className="input-group">
            <label className="input__form--label">Name</label>
            <input className="input"
              type="text" 
              onChange={(e) => setName(e.target.value)}
              value={name}
              autoFocus
            />
          </div>
          <div className="input-group">
          <label className="input__form--label">Email</label>
            <input className="input"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="input-group">
          <label className="input__form--label">Password</label>
            <input className="input"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>


              </Fragment>
             )
           }

  
            <div className="input-group form__checkbox-group">
              <input
                type="checkbox"
                className="form__checkbox"
                id="checkbox"
              ></input>
              <label htmlFor="checkbox" className="form__checkmark-label">
                Remember Me
              </label>
              <div className="link">
                <a href="#">
                  {/*change the link later*/}
                  Forgot password?
                </a>
              </div>
            </div>
            <input type="submit" className="button" value={props.type}></input>
            {props.type !== 'Create' ? (
              
              <div className="footer">
                <p>
                  If you are a client click here to{' '}
                  <Link to="/register">
                    {/*change the link later*/}
                    Register!
                  </Link>
                </p>
              </div>
            ) : (
              ''
            )}
          </form>
        </div>
      </div>
    {/*Related to background image*/}
      <div className="img-group">
        <div className="img-box">
          <div className="img-shade">
            <img className="img" src={backgroundImg}></img>
          </div>
        </div>
        <div className="text-box">
          <h3 className="heading-tertiary-white--main">
            Why are we different?
          </h3>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipis Curabitur est dolor,
            suscipit ut ipvsum non, ornare Nam gravida imperdiet aliquet.
            Maecenas vesti suscipit ut ipvsum non.
          </p>
        </div>
      </div>
    </StyledSection>
  );
};

export default LoginComponents;
