import React from 'react';
import './footer.css'
import  SvgVisa  from "react-pay-icons/lib/Visa";
import SvgMasterCard from "react-pay-icons/lib/Mastercard"
import Paypal from "react-pay-icons/lib/Paypal"
import {BsApple} from "react-icons/bs"
import {GrFacebookOption, GrInstagram, GrTwitter, GrYoutube} from "react-icons/gr"

function Footer(){
    return(
        <>
            <div className="footer_section">
                <div className="footer_first_part">
                    <div className="first_part_column">
                        <p>Reminant</p>
                        <ul>
                            <li><a href="#">Tərəfdaşlar</a></li>
                            <li><a href="#">Mobil</a></li>
                            <li><a href="#">Məkanlar</a></li>
                            <li><a href="#">Reminantda satış</a></li>
                            <li><a href="#">Sertifikatlar</a></li>
                        </ul>
                    </div>
                    <div className="first_part_column">
                        <p>Haqqımızda</p>
                        <li><a href="#">Biz kimik</a></li>
                        <li><a href="#">Kariyera</a></li>
                        <li><a href="#">Əlaqə</a></li>
                    </div>
                    <div className="first_part_column">
                        <p>Kompaniyalar</p>
                        <li><a href="#">Fürsətlər</a></li>
                        <li><a href="#">Aktiv Kompaniyalar</a></li>
                        <li><a href="#">Hədiyyələr</a></li>
                        <li><a href="#">Vip Üzvlük</a></li>
                    
                    </div>
                    <div className="first_part_column">
                        <p>Kömək</p>
                        <li><a href="#">Tez-tez soruşulanlar</a></li>
                        <li><a href="#">Canli kömək</a></li>
                        <li><a href="#">Geri qaytarma</a></li>
                        <li><a href="#">Təlimatlar</a></li>
                    
                    </div>
                    <div className="first_part_column">
                        <p>Güvənli Alışveriş</p>
                        <div className="footer_pay_methods">
                            <SvgVisa style={{width:50}}/>
                            <SvgMasterCard style={{width:50}}/>
                            <Paypal style={{width:50}}/>
                        </div>
                    </div>
                    <div className="first_part_column">
                        <p>Mobil Programlar</p>
                        <div className="mobile_apps">
                            <a href="">
                                <div className="ios" style={{marginBottom:'10px'}}>
                                    <BsApple size={25}/>
                                    <p className='app_name'>App Store'dan <p className='app_text'>Endirin</p></p>
                                </div>
                            </a>
                            <a href="">
                                <div className="android">
                                    <img src={require("../../Assets/Images/googleplay.png")} alt="" width={20}/>
                                    <p className='app_name'>Google Play'dən <p className='app_text'>Endirin</p></p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="first_part_column">
                        <p>Sosial Media</p>
                        <div className="sosial_media_apps">
                            <div><GrFacebookOption/></div>
                            <div><GrInstagram/></div>
                            <div><GrTwitter/></div>
                            <div><GrYoutube/></div>
                        </div>
                    </div>
                </div>
                <div className="footer_second_part">
                    <span>©2022 DSM Grup Danışmanlık İletişim ve Satış Tic.A.Ş.-Her Hakkı Saklıdır.</span>
                    <div>
                        <ul>
                            <li><a href="">Kullanım Koşulları</a></li>
                            <li><a href="">KVK ve Gizlilik Politikası</a></li>
                            <li><a href="">DSM Grup</a></li>
                            <li><a href="">Çerez Tercihleri</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer