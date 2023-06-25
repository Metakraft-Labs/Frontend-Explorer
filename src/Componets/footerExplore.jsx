import React from 'react'
import METAKRAFT from '../Assets/METAKRAFT.jpeg'

function footerExplore() {
  return (
    <div className="explore-footer" style={{fontFamily:'Roboto'}}>
    <div>
        <img src={METAKRAFT} alt="image" />
    </div>
    <div className="explore-footer-2">
        <div>
            <div className="explore-footer-2-1">Company</div>
            <div className="explore-footer-2-2" style={{paddingTop:"1vw",color:'black'}}>About</div>
            <div className="explore-footer-2-3" style={{paddingTop:"1vw",color:'black'}}>Careers</div>
        </div>
        <div>
            <div className="explore-footer-2-1">Stats</div>
            <div className="explore-footer-2-2" style={{paddingTop:"1vw",color:'black'}}>Creator</div>
            <div className="explore-footer-2-3" style={{paddingTop:"1vw",color:'black'}}>Krafter</div>
        </div>
    </div>
    <div>
        <div className="explore-footer-3-1">Follow us on</div>
        <div className="explore-footer-3-2">
            <div>
            <svg width="1.5vw" height="1.5vw" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.7097 0.654495C19.7097 0.654495 21.6523 -0.103005 21.4904 1.73664C21.4365 2.49415 20.9508 5.1454 20.573 8.0131L19.278 16.5079C19.278 16.5079 19.17 17.7524 18.1987 17.9688C17.2274 18.1852 15.7704 17.2113 15.5005 16.9949C15.2847 16.8326 11.4534 14.3977 10.1043 13.2074C9.72655 12.8827 9.29485 12.2334 10.1582 11.476L15.8244 6.06525C16.4719 5.41595 17.1194 3.90095 14.4213 5.7406L6.86655 10.8808C6.86655 10.8808 6.00315 11.4219 4.3843 10.9349L0.876711 9.85275C0.876711 9.85275 -0.418395 9.04115 1.79408 8.2295C7.19035 5.68645 13.8278 3.0893 19.7097 0.654495Z" fill="#1F1D2B"/>
            </svg>
            </div>
            <div style={{padding:"0.5vw 0.55vw"}}>
            <svg width="1.5vw" height="1.5vw" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1683 2.6854C17.6902 2.0298 17.1159 1.52093 16.4383 1.18877C15.6735 0.813953 14.8237 0.687077 13.9147 0.778398C12.4473 0.925814 11.4224 1.74408 10.8369 2.94524C10.3368 3.97121 10.1624 5.2564 10.2222 6.63205C8.8576 7.16056 7.65357 6.87434 6.58645 6.19309C5.36563 5.41372 4.35044 4.12353 3.63635 2.95957C3.47912 2.70328 3.18401 2.56566 2.88661 2.60995C2.5892 2.65424 2.34699 2.87187 2.27126 3.16285C1.77153 5.0828 1.23618 7.56307 2.29714 10.3192C2.90478 11.8976 4.18217 13.2101 6.01747 14.2928C4.19337 15.1109 2.74771 15.3554 1.64039 15.1443C1.27835 15.0753 0.919831 15.2796 0.794603 15.6262C0.669376 15.9729 0.814556 16.3591 1.1371 16.5374C1.15989 16.55 1.1862 16.5647 1.2159 16.5812C1.81486 16.9146 3.79685 18.0177 6.25581 18.6952C8.81722 19.4008 12.0598 19.6897 14.8073 17.973C19.9024 14.7896 19.8682 9.39465 19.8519 6.82575C19.8515 6.75728 19.8511 6.69081 19.8508 6.62646C19.9216 6.50341 20.0094 6.3759 20.1228 6.21419C20.1282 6.20653 20.1336 6.1988 20.1391 6.19101C20.2855 5.98228 20.466 5.72491 20.632 5.4106C20.9906 4.7314 21.25 3.85076 21.25 2.47187C21.25 2.17392 21.0736 1.90423 20.8007 1.78478C20.5277 1.66533 20.2099 1.71878 19.9911 1.92096C19.2882 2.5702 18.6965 2.76123 18.1683 2.6854ZM15.7781 2.53568C15.3002 2.30145 14.7377 2.20327 14.0647 2.27089C13.159 2.36187 12.5633 2.8269 12.1853 3.60245C11.7862 4.4213 11.6294 5.60343 11.7512 7.03993C11.7771 7.34468 11.6153 7.63459 11.3424 7.77261C9.23218 8.83974 7.31708 8.43913 5.7793 7.45742C4.82973 6.85121 4.01653 6.02233 3.35361 5.17926C3.1022 6.60746 3.06567 8.14024 3.697 9.78028C4.24626 11.2071 5.6061 12.5138 7.98244 13.6339C8.23821 13.7544 8.40444 14.0086 8.41239 14.2912C8.42033 14.5738 8.26865 14.8369 8.02006 14.9717C6.72559 15.6732 5.50943 16.1787 4.38122 16.4595C5.05552 16.7402 5.82646 17.021 6.65424 17.249C9.06563 17.9134 11.7958 18.0859 14.0125 16.7009C18.3781 13.9733 18.3609 9.38603 18.3512 6.78519C18.3507 6.66689 18.3503 6.55269 18.3503 6.44297C18.3503 6.33117 18.3753 6.22078 18.4234 6.11989C18.5652 5.82284 18.7426 5.56985 18.89 5.35968L18.8954 5.35196C19.0505 5.13075 19.1842 4.94003 19.3055 4.71021C19.4101 4.51228 19.5118 4.27251 19.5915 3.9588C18.9254 4.23035 18.2246 4.28601 17.5028 4.07039C17.3334 4.01978 17.1873 3.91094 17.0903 3.7631C16.6984 3.16553 16.2575 2.77066 15.7781 2.53568Z" fill="#1F1D2B"/>
            </svg>
            </div>
            <div>
            <svg width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5317 5.2072C8.3033 5.06905 10.4591 5 11.9989 5C13.5389 5 15.6954 5.0691 18.4684 5.20725C19.9695 5.28205 21.1835 6.45595 21.3087 7.9536C21.4355 9.4706 21.4989 10.8067 21.4989 11.9619C21.4989 13.1313 21.434 14.486 21.304 16.0261C21.1792 17.5052 19.9916 18.6706 18.5104 18.7675C16.1397 18.9225 13.9692 19 11.9989 19C10.0289 19 7.8592 18.9225 5.4898 18.7675C4.00914 18.6707 2.82173 17.506 2.69632 16.0275C2.56471 14.4759 2.4989 13.1207 2.4989 11.9619C2.4989 10.817 2.56314 9.4805 2.6916 7.9522C2.81745 6.45515 4.03125 5.282 5.5317 5.2072Z" stroke="#1F1D2B" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M10.5 9.80458V14.203C10.5 14.4397 10.6919 14.6316 10.9285 14.6316C11.0126 14.6316 11.0948 14.6069 11.1649 14.5605L14.4637 12.3803C14.6612 12.2498 14.7154 11.9839 14.5849 11.7864C14.5537 11.7392 14.5135 11.6986 14.4665 11.6671L11.1677 9.44893C10.9713 9.31688 10.705 9.36903 10.5729 9.56548C10.5254 9.63618 10.5 9.71943 10.5 9.80458Z" stroke="#1F1D2B" stroke-width="1.5" stroke-linejoin="round"/>
            </svg>

            </div>
        </div>
        <div className="explore-footer-3-3">
            <div>
            <svg width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_167_253)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.05556 1.75C1.89068 1.75 1.75 1.88552 1.75 2.06137V21.9387C1.75 22.1145 1.89068 22.25 2.05556 22.25H21.9445C22.1093 22.25 22.25 22.1145 22.25 21.9387V2.06137C22.25 1.88552 22.1093 1.75 21.9445 1.75H2.05556ZM0.25 2.06137C0.25 1.06486 1.0545 0.25 2.05556 0.25H21.9445C22.9455 0.25 23.75 1.06486 23.75 2.06137V21.9387C23.75 22.9351 22.9455 23.75 21.9445 23.75H2.05556C1.0545 23.75 0.25 22.9351 0.25 21.9387V2.06137Z" fill="#1F1D2B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3308 8.9436H17.1537H16.8965C16.2215 8.9436 15.6743 9.4908 15.6743 10.1658V12.611H19.3308L18.7952 16.2764H15.6743V23.0001H11.6533V16.2764H8.33337V12.611H11.6104L11.6533 9.1318L11.6413 7.8848C11.6244 6.12395 13.0381 4.68283 14.7989 4.66592C14.8091 4.66582 14.8193 4.66577 14.8296 4.66577H19.3308V8.9436Z" fill="#1F1D2B"/>
            </g>
            <defs>
            <clipPath id="clip0_167_253">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
            </svg>

            </div>
            <div>
            <svg width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 7C2.25 4.37665 4.37665 2.25 7 2.25H17C19.6234 2.25 21.75 4.37665 21.75 7V17C21.75 19.6234 19.6234 21.75 17 21.75H7C4.37665 21.75 2.25 19.6234 2.25 17V7ZM7 3.75C5.20507 3.75 3.75 5.20507 3.75 7V17C3.75 18.7949 5.20507 20.25 7 20.25H17C18.7949 20.25 20.25 18.7949 20.25 17V7C20.25 5.20507 18.7949 3.75 17 3.75H7Z" fill="#1F1D2B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 12C7.25 9.37664 9.37664 7.25 12 7.25C14.6234 7.25 16.75 9.37664 16.75 12C16.75 14.6234 14.6234 16.75 12 16.75C9.37664 16.75 7.25 14.6234 7.25 12ZM12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75Z" fill="#1F1D2B"/>
            <path d="M17.5 7.5C18.0523 7.5 18.5 7.0523 18.5 6.5C18.5 5.9477 18.0523 5.5 17.5 5.5C16.9477 5.5 16.5 5.9477 16.5 6.5C16.5 7.0523 16.9477 7.5 17.5 7.5Z" fill="#1F1D2B"/>
            </svg>
            </div>
            <div style={{padding:"0.5vw 0.55vw"}}>
            <svg width="1.5vw" height="1.5vw" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.67915 8.57009C4.7348 8.42804 2.6882 9.47779 1.53931 11.7193C-0.18403 15.0816 1.24025 20.5834 6.98955 20.5834C12.7388 20.5834 12.9052 15.0278 12.9052 14.4458C12.9052 14.0578 12.9052 11.8883 12.9052 7.93739C14.1349 8.71629 15.1716 9.18514 16.0155 9.34394C16.8594 9.50279 17.3959 9.57319 17.625 9.55514V6.31724C16.8444 6.22314 16.1694 6.04379 15.6 5.77919C14.7458 5.38224 13.052 4.28069 13.052 2.66616C13.0532 2.67406 13.0532 2.25759 13.052 1.41675H9.49295C9.4824 9.32479 9.4824 13.6678 9.49295 14.4458C9.50885 15.6128 8.6035 17.2453 6.7679 17.2453C4.93225 17.2453 4.0269 15.6142 4.0269 14.562C4.0269 13.9179 4.2481 12.9843 5.16265 12.293C5.705 11.883 6.45775 11.7193 7.67915 11.7193C7.67915 11.3415 7.67915 10.2918 7.67915 8.57009Z" stroke="#1F1D2B" stroke-width="1.5" stroke-linejoin="round"/>
            </svg>
            </div>
        </div>
    </div>
   </div>
  )
}

export default footerExplore
