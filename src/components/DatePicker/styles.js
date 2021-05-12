import styled from 'styled-components';

export const DatePickerComponent = styled.div`
  float: left;
  position: relative;

  * {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    -khtml-user-select: none;    /* Konqueror */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* Internet Explorer/Edge */
    user-select: none;           /* Non-prefixed version, currently */  
  }
`;

export const DatePickerInput = styled.div`
  float: left;
  width: 10rem;
  height: 1.2rem;
  overflow: hidden;
  border-radius: 2px;

  input:focus {
    outline: none;
  }

  input {
    width: 100%!important;
    background: #faf3ec;
    border: none;
    padding-right: 10px;
    height: 100%;
    text-align: center;
    text-transform: uppercase;
    /* letter-spacing: 1px; */
    font-size: 11px;
    cursor: pointer;

    &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
}
  }
`;

export const DatePickerContainer = styled.div`
  position: fixed;
  left:0;
  /* top: 40px; */
  margin-top: 25px;
  margin-left: 27px;
  width: 360px;
  min-height: 350px;
  background: #fff;
  box-shadow: 10px 10px 40px rgba(0,0,0,0.2);
  border-radius: 20px;
  overflow: hidden;
  padding: 25px 30px;

  .mdpc-head {
    float: left;
    width: 100%;
    height: 53px;
  }

  .mdpc-body {
    float: left;
    width: 100%;
    margin-top: 20px;
  }

  /**
  * Controls
  */

  .mdpch-button {
    float: left;
    width: 45px;
    height: 100%;
    box-sizing: border-box;
    position: relative;
  }
  .mdpchb-inner:hover > span {
    border-color: #555!important;
  } 
  .mdpchb-inner:hover { 
    cursor: pointer;
    background: #eee;
  }
  .mdpchb-inner {
    float: left;
    height: 35px;
    width: 35px;
    background: #f4f4f4;
    border-radius: 100%;
    line-height: 35px;
    text-align: center;
    position: absolute;
    top:50%;
    left: 50%;
    margin-left: -17px;
    margin-top: -17px;
  }

  .mdpchbi-right-arrows:after,
  .mdpchbi-left-arrows:after,
  .mdpchbi-right-arrow,
  .mdpchbi-right-arrows,
  .mdpchbi-left-arrow,
  .mdpchbi-left-arrows {
    display: block;
    float: left;
    width: 6px;
    height: 6px;
    border-left: 2px solid #888;
    border-bottom: 2px solid #888;
    position: absolute;
  }

  .mdpchbi-right-arrow,
  .mdpchbi-right-arrows,
  .mdpchbi-left-arrow,
  .mdpchbi-left-arrows {
    transform: rotate(45deg);
    left: 50%;
    top:50%;
    margin-left: -2px;
    margin-top: -4px;
  }

  .mdpchbi-right-arrows,
  .mdpchbi-right-arrow {
    transform: rotate(225deg);
    margin-left: -4px;
  }

  .mdpchbi-right-arrows:after,
  .mdpchbi-left-arrows:after {
    content: '';
  }

  .mdpchbi-left-arrows{
    margin-left: -5px;
  }

  .mdpchbi-right-arrows{
    margin-left: -2px;
  }

  .mdpchbi-right-arrows:after,
  .mdpchbi-left-arrows:after{
    left: 3px;
    top: -5px
  }


  .mdpch-container {
    float: left;
    width: 120px;
    height: 100%;
  }

  .mdpchc-year {
    float: left;
    width: 100%;
    height: 30px;
    font-size: 27px;
    color: #666;
    font-weight: 200px;
    text-align: center;
  }

  .mdpchc-month {
    float: left;
    width: 100%;
    height: 15px;
    font-size: 13px;
    color: #666;
    font-weight: 200px;
    text-align: center;
  }

  /**
  *  Calendar
  */
  .cc-month,
  .cc-head,
  .cch-name, 
  .cc-body,
  .cdc-day span,
  .cdc-day,
  .c-day-container,
  .c-container {
    position: relative;
    display: block;
    float: left;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .c-container { 
    width: 100%;
    height: 100%;
  }

  .cc-month { 
    height: 30px;
    width: 100%;
    font-family: Roboto;
    font-size: 16px;
    line-height: 30px;
    color: #666;
  }

  .cc-head { 
    height: 30px;
    width: 100%;
    margin-top: 10px;
  }

  .cch-name { 
    width: 14.285%;
    height: 30px;
    line-height: 30px;
    font-weight: 700;
    color: #666;
    font-size: 9px;
    text-align: center;
  }

  .cc-body { 
    height: 270px;
    width: 100%;
  }

  .c-day-container { 
    width: 14.285%;
    height: 16.6666%;
  }

  .cdc-day {
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 300;
    color: #444;
    text-align: center;
  }

  .cdc-day span { 
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 300;
    color: #444;
  }

  .cdc-day span:hover {
    cursor: pointer;
    background: #eee;
  }

  .cdc-day span {
    width: 30px;
    height: 30px;
    margin-top: -15px;
    margin-left: -15px;
    left: 50%;
    top: 50%;
    font-weight: 400;
    border-radius: 100%;
    line-height: 30px;
  }

  .c-day-container.disabled {
    pointer-events: none;
  }

  .c-day-container.disabled .cdc-day span {
    color: #ddd;
  }

  .c-day-container.disabled .cdc-day span {
    background: #fff!important;
  }

  .c-day-container.highlight .cdc-day span {
    background: #efdbca;
  }
  
  .c-day-container.highlight-green .cdc-day span {
    background: #d4e2cb;
  }

`;



// .MyDatePicker {
//   float: left;
//   position: relative;
// }
// .MyDatePicker * {
//   -webkit-touch-callout: none; /* iOS Safari */
//   -webkit-user-select: none;   /* Chrome/Safari/Opera */
//   -khtml-user-select: none;    /* Konqueror */
//   -moz-user-select: none;      /* Firefox */
//   -ms-user-select: none;       /* Internet Explorer/Edge */
//   user-select: none;           /* Non-prefixed version, currently */  
// }

// .mdp-input{
  // float: left;
  // width: 150px;
  // height: 35px;
  // overflow: hidden;
  // border-radius: 20px;
// }
// .mdp-input input:focus{
//   outline: none;
// }
// .mdp-input input{
//   width: 130%;
//   background: #f5f5f5;
//   border: none;
//   padding-right: 10px;
//   height: 35px;
//   text-align: center;
//   text-transform: uppercase;
//   letter-spacing: 2px;
//   font-size: 11px;
//   cursor: pointer;
// }

// .mdp-container {
//   float: left;
//   position: absolute;
//   left:0;
//   top: 40px;
//   width: 300px;
//   min-height: 350px;
//   background: #fff;
//   box-shadow: 10px 10px 40px rgba(0,0,0,0.2);
//   border-radius: 20px;
//   overflow: hidden;
//   padding: 25px 30px;
// }
// .mdpc-head{
//   float: left;
//   width: 100%;
//   height: 53px;
// }
// .mdpc-body{
//   float: left;
//   width: 100%;
//   margin-top: 20px;
// }

// /**
// * Controls
// */

// .mdpch-button{
//   float: left;
//   width: 45px;
//   height: 100%;
//   box-sizing: border-box;
//   position: relative;
// }
// .mdpchb-inner:hover > span{
//   border-color: #555!important;
// } 
// .mdpchb-inner:hover{ 
//   cursor: pointer;
//   background: #eee;
// }
// .mdpchb-inner {
//   float: left;
//   height: 35px;
//   width: 35px;
//   background: #f4f4f4;
//   border-radius: 100%;
//   line-height: 35px;
//   text-align: center;
//   position: absolute;
//   top:50%;
//   left: 50%;
//   margin-left: -17px;
//   margin-top: -17px;
// }

// .mdpchbi-right-arrows:after,
// .mdpchbi-left-arrows:after,
// .mdpchbi-right-arrow,
// .mdpchbi-right-arrows,
// .mdpchbi-left-arrow,
// .mdpchbi-left-arrows{
//   display: block;
//   float: left;
//   width: 6px;
//   height: 6px;
//   border-left: 2px solid #888;
//   border-bottom: 2px solid #888;
//   position: absolute;
// }
// .mdpchbi-right-arrow,
// .mdpchbi-right-arrows,
// .mdpchbi-left-arrow,
// .mdpchbi-left-arrows{
//   transform: rotate(45deg);
//   left: 50%;
//   top:50%;
//   margin-left: -2px;
//   margin-top: -4px;
// }
// .mdpchbi-right-arrows,
// .mdpchbi-right-arrow {
//   transform: rotate(225deg);
//   margin-left: -4px;
// }
// .mdpchbi-right-arrows:after,
// .mdpchbi-left-arrows:after{
//   content: '';
// }

// .mdpchbi-left-arrows{
//   margin-left: -5px;
// }
// .mdpchbi-right-arrows{
//   margin-left: -2px;
// }
// .mdpchbi-right-arrows:after,
// .mdpchbi-left-arrows:after{
//   left: 3px;
//   top: -5px
// }


// .mdpch-container{
//   float: left;
//   width: 120px;
//   height: 100%;
// }
// .mdpchc-year{
//   float: left;
//   width: 100%;
//   height: 30px;
//   font-size: 27px;
//   color: #666;
//   font-weight: 200px;
//   text-align: center;
// }
// .mdpchc-month{
//   float: left;
//   width: 100%;
//   height: 15px;
//   font-size: 13px;
//   color: #666;
//   font-weight: 200px;
//   text-align: center;
// }

// /**
// *  Calendar
// */
// .cc-month,
// .cc-head,
// .cch-name, 
// .cc-body,
// .cdc-day span,
// .cdc-day,
// .c-day-container,
// .c-container{
//   position: relative;
//   display: block;
//   float: left;
//   -webkit-box-sizing: border-box;
//   -moz-box-sizing: border-box;
//   box-sizing: border-box;
// }

// .c-container{ 
//   width: 100%;
//   height: 100%;
// }

// .cc-month{ 
//   height: 30px;
//   width: 100%;
//   font-family: Roboto;
//   font-size: 16px;
//   line-height: 30px;
//   color: #666;
// }
// .cc-head{ 
//   height: 30px;
//   width: 100%;
//   margin-top: 10px;
// }
// .cch-name{ 
//   width: 14.285%;
//   height: 30px;
//   line-height: 30px;
//   font-weight: 700;
//   color: #666;
//   font-size: 9px;
//   text-align: center;
// }
// .cc-body{ 
//   height: 270px;
//   width: 100%;
// }
// .c-day-container{ 
//   width: 14.285%;
//   height: 16.6666%;
// }
// .cdc-day{
//   width: 100%;
//   height: 100%;
//   font-size: 12px;
//   font-weight: 300;
//   color: #444;
//   text-align: center;
// }
// .cdc-day span{ 
//   width: 100%;
//   height: 100%;
//   font-size: 12px;
//   font-weight: 300;
//   color: #444;
// }

// .cdc-day span:hover{
//   cursor: pointer;
//   background: #eee;
// } 
// .cdc-day span{
//   width: 30px;
//   height: 30px;
//   margin-top: -15px;
//   margin-left: -15px;
//   left: 50%;
//   top: 50%;
//   font-weight: 400;
//   border-radius: 100%;
//   line-height: 30px;
// }
// .c-day-container.disabled{
//   pointer-events: none;
// }

// .c-day-container.disabled .cdc-day span{
//   color: #ddd;
// }
// .c-day-container.disabled .cdc-day span{
//   background: #fff!important;
// }
// .c-day-container.highlight .cdc-day span{
//   background: #efdbca;
// }
// .c-day-container.highlight-green .cdc-day span{
//   background: #d4e2cb;
// }