import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [last_name, setLastName] = useState("");
    const [first_name, setFirstName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address_1, setAddress1] = useState("");
    const [address_2, setAddress2] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { email, password, confirmPassword, address_1, address_2, country, state, zip, phoneNumber }
        // try {
        //     const res = await axios.post(`${baseUrl}/auth/register`, {
        //         username, email, password
        //     });
        //     res.data && window.location.replace("/login")
        // } catch (error) {
        //     setError(true)
        // }
        alert("Account Created ->" + JSON.stringify(data))
    }

    return (
        <div className='my-28'>
            <div className='text-center text-4xl font-bold text-larq mb-12'>New Account</div>
            <div className='md:flex justify-center md:w-3/5 mx-auto'>
                <div className='md:w-3/6 p-3'>
                    <div className='mb-10'>
                        <label className='block mb-2 text-slate-400' htmlFor="email">Email Address</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} id='email' name='email' className='border-2 w-full p-4' type="text" />
                    </div>
                    <div className='mb-10'>
                        <label className='block mb-2 text-slate-400' htmlFor="confirmPassword">Confirm Password</label>
                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id='confirmPassword' name='confirmPassword' className='border-2 w-full p-4' type="password" />
                    </div>
                    <div className='mb-10'>
    <label className='block mb-2 text-slate-400' htmlFor="first_name">First Name</label>
    <input value={first_name} onChange={(e) => setFirstName(e.target.value)} id='first_name' name='first_name' className='border-2 w-full p-4' type="text" />
</div>


                    <div className='mb-8'>
                        <label className='block mb-2 text-slate-400' htmlFor="address1">Address Line 1</label>
                        <input value={address_1} onChange={(e) => setAddress1(e.target.value)} id='address1' name='address1' className='border-2 w-full p-4' type="text" />
                    </div>
                    <div className='mb-8'>
                        <label className='block mb-2 text-slate-400' htmlFor="state">State</label>
                        <input value={state} onChange={(e) => setState(e.target.value)} id='state' name='state' className='border-2 w-full p-4' type="text" />
                    </div>
                    <div className='mb-8'>
                        <label className='block mb-2 text-slate-400' htmlFor="phone">Phone Number</label>
                        <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} id='phone' name='phone' className='border-2 w-full p-4' type="text" />
                    </div>
                </div>
                <div className='md:w-3/6 p-3'>

                    <div className='mb-8'>
                        <label className='block mb-2 text-slate-400' htmlFor="password">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} id='password' name='password' className='border-2 w-full p-4' type="password" />
                    </div>
                    <div className='mb-8'>
                        <label className='block mb-2 text-slate-400' htmlFor="country">Country</label>
                        <select value={country} onChange={(e) => setCountry(e.target.value)} id="country" name="country" className="form-select border-2 w-full p-4">
                            <option className="border-2 w-full p-4" >  select country</option>
                            <option className="border-2 w-full p-4" value="AF">Afghanistan</option>
                            <option className="border-2 w-full p-4" value="AX">Aland Islands</option>
                            <option className="border-2 w-full p-4" value="AL">Albania</option>
                            <option className="border-2 w-full p-4" value="DZ">Algeria</option>
                            <option className="border-2 w-full p-4" value="AS">American Samoa</option>
                            <option className="border-2 w-full p-4" value="AD">Andorra</option>
                            <option className="border-2 w-full p-4" value="AO">Angola</option>
                            <option className="border-2 w-full p-4" value="AI">Anguilla</option>
                            <option className="border-2 w-full p-4" value="AQ">Antarctica</option>
                            <option className="border-2 w-full p-4" value="AG">Antigua and Barbuda</option>
                            <option className="border-2 w-full p-4" value="AR">Argentina</option>
                            <option className="border-2 w-full p-4" value="AM">Armenia</option>
                            <option className="border-2 w-full p-4" value="AW">Aruba</option>
                            <option className="border-2 w-full p-4" value="AU">Australia</option>
                            <option className="border-2 w-full p-4" value="AT">Austria</option>
                            <option className="border-2 w-full p-4" value="AZ">Azerbaijan</option>
                            <option className="border-2 w-full p-4" value="BS">Bahamas</option>
                            <option className="border-2 w-full p-4" value="BH">Bahrain</option>
                            <option className="border-2 w-full p-4" value="BD">Bangladesh</option>
                            <option className="border-2 w-full p-4" value="BB">Barbados</option>
                            <option className="border-2 w-full p-4" value="BY">Belarus</option>
                            <option className="border-2 w-full p-4" value="BE">Belgium</option>
                            <option className="border-2 w-full p-4" value="BZ">Belize</option>
                            <option className="border-2 w-full p-4" value="BJ">Benin</option>
                            <option className="border-2 w-full p-4" value="BM">Bermuda</option>
                            <option className="border-2 w-full p-4" value="BT">Bhutan</option>
                            <option className="border-2 w-full p-4" value="BO">Bolivia</option>
                            <option className="border-2 w-full p-4" value="BQ">Bonaire, Sint Eustatius and Saba</option>
                            <option className="border-2 w-full p-4" value="BA">Bosnia and Herzegovina</option>
                            <option className="border-2 w-full p-4" value="BW">Botswana</option>
                            <option className="border-2 w-full p-4" value="BV">Bouvet Island</option>
                            <option className="border-2 w-full p-4" value="BR">Brazil</option>
                            <option className="border-2 w-full p-4" value="IO">British Indian Ocean Territory</option>
                            <option className="border-2 w-full p-4" value="BN">Brunei Darussalam</option>
                            <option className="border-2 w-full p-4" value="BG">Bulgaria</option>
                            <option className="border-2 w-full p-4" value="BF">Burkina Faso</option>
                            <option className="border-2 w-full p-4" value="BI">Burundi</option>
                            <option className="border-2 w-full p-4" value="KH">Cambodia</option>
                            <option className="border-2 w-full p-4" value="CM">Cameroon</option>
                            <option className="border-2 w-full p-4" value="CA">Canada</option>
                            <option className="border-2 w-full p-4" value="CV">Cape Verde</option>
                            <option className="border-2 w-full p-4" value="KY">Cayman Islands</option>
                            <option className="border-2 w-full p-4" value="CF">Central African Republic</option>
                            <option className="border-2 w-full p-4" value="TD">Chad</option>
                            <option className="border-2 w-full p-4" value="CL">Chile</option>
                            <option className="border-2 w-full p-4" value="CN">China</option>
                            <option className="border-2 w-full p-4" value="CX">Christmas Island</option>
                            <option className="border-2 w-full p-4" value="CC">Cocos (Keeling) Islands</option>
                            <option className="border-2 w-full p-4" value="CO">Colombia</option>
                            <option className="border-2 w-full p-4" value="KM">Comoros</option>
                            <option className="border-2 w-full p-4" value="CG">Congo</option>
                            <option className="border-2 w-full p-4" value="CD">Congo, Democratic Republic of the Congo</option>
                            <option className="border-2 w-full p-4" value="CK">Cook Islands</option>
                            <option className="border-2 w-full p-4" value="CR">Costa Rica</option>
                            <option className="border-2 w-full p-4" value="CI">Cote D'Ivoire</option>
                            <option className="border-2 w-full p-4" value="HR">Croatia</option>
                            <option className="border-2 w-full p-4" value="CU">Cuba</option>
                            <option className="border-2 w-full p-4" value="CW">Curacao</option>
                            <option className="border-2 w-full p-4" value="CY">Cyprus</option>
                            <option className="border-2 w-full p-4" value="CZ">Czech Republic</option>
                            <option className="border-2 w-full p-4" value="DK">Denmark</option>
                            <option className="border-2 w-full p-4" value="DJ">Djibouti</option>
                            <option className="border-2 w-full p-4" value="DM">Dominica</option>
                            <option className="border-2 w-full p-4" value="DO">Dominican Republic</option>
                            <option className="border-2 w-full p-4" value="EC">Ecuador</option>
                            <option className="border-2 w-full p-4" value="EG">Egypt</option>
                            <option className="border-2 w-full p-4" value="SV">El Salvador</option>
                            <option className="border-2 w-full p-4" value="GQ">Equatorial Guinea</option>
                            <option className="border-2 w-full p-4" value="ER">Eritrea</option>
                            <option className="border-2 w-full p-4" value="EE">Estonia</option>
                            <option className="border-2 w-full p-4" value="ET">Ethiopia</option>
                            <option className="border-2 w-full p-4" value="FK">Falkland Islands (Malvinas)</option>
                            <option className="border-2 w-full p-4" value="FO">Faroe Islands</option>
                            <option className="border-2 w-full p-4" value="FJ">Fiji</option>
                            <option className="border-2 w-full p-4" value="FI">Finland</option>
                            <option className="border-2 w-full p-4" value="FR">France</option>
                            <option className="border-2 w-full p-4" value="GF">French Guiana</option>
                            <option className="border-2 w-full p-4" value="PF">French Polynesia</option>
                            <option className="border-2 w-full p-4" value="TF">French Southern Territories</option>
                            <option className="border-2 w-full p-4" value="GA">Gabon</option>
                            <option className="border-2 w-full p-4" value="GM">Gambia</option>
                            <option className="border-2 w-full p-4" value="GE">Georgia</option>
                            <option className="border-2 w-full p-4" value="DE">Germany</option>
                            <option className="border-2 w-full p-4" value="GH">Ghana</option>
                            <option className="border-2 w-full p-4" value="GI">Gibraltar</option>
                            <option className="border-2 w-full p-4" value="GR">Greece</option>
                            <option className="border-2 w-full p-4" value="GL">Greenland</option>
                            <option className="border-2 w-full p-4" value="GD">Grenada</option>
                            <option className="border-2 w-full p-4" value="GP">Guadeloupe</option>
                            <option className="border-2 w-full p-4" value="GU">Guam</option>
                            <option className="border-2 w-full p-4" value="GT">Guatemala</option>
                            <option className="border-2 w-full p-4" value="GG">Guernsey</option>
                            <option className="border-2 w-full p-4" value="GN">Guinea</option>
                            <option className="border-2 w-full p-4" value="GW">Guinea-Bissau</option>
                            <option className="border-2 w-full p-4" value="GY">Guyana</option>
                            <option className="border-2 w-full p-4" value="HT">Haiti</option>
                            <option className="border-2 w-full p-4" value="HM">Heard Island and Mcdonald Islands</option>
                            <option className="border-2 w-full p-4" value="VA">Holy See (Vatican City State)</option>
                            <option className="border-2 w-full p-4" value="HN">Honduras</option>
                            <option className="border-2 w-full p-4" value="HK">Hong Kong</option>
                            <option className="border-2 w-full p-4" value="HU">Hungary</option>
                            <option className="border-2 w-full p-4" value="IS">Iceland</option>
                            <option className="border-2 w-full p-4" value="IN">India</option>
                            <option className="border-2 w-full p-4" value="ID">Indonesia</option>
                            <option className="border-2 w-full p-4" value="IR">Iran, Islamic Republic of</option>
                            <option className="border-2 w-full p-4" value="IQ">Iraq</option>
                            <option className="border-2 w-full p-4" value="IE">Ireland</option>
                            <option className="border-2 w-full p-4" value="IM">Isle of Man</option>
                            <option className="border-2 w-full p-4" value="IL">Israel</option>
                            <option className="border-2 w-full p-4" value="IT">Italy</option>
                            <option className="border-2 w-full p-4" value="JM">Jamaica</option>
                            <option className="border-2 w-full p-4" value="JP">Japan</option>
                            <option className="border-2 w-full p-4" value="JE">Jersey</option>
                            <option className="border-2 w-full p-4" value="JO">Jordan</option>
                            <option className="border-2 w-full p-4" value="KZ">Kazakhstan</option>
                            <option className="border-2 w-full p-4" value="KE">Kenya</option>
                            <option className="border-2 w-full p-4" value="KI">Kiribati</option>
                            <option className="border-2 w-full p-4" value="KP">Korea, Democratic People's Republic of</option>
                            <option className="border-2 w-full p-4" value="KR">Korea, Republic of</option>
                            <option className="border-2 w-full p-4" value="XK">Kosovo</option>
                            <option className="border-2 w-full p-4" value="KW">Kuwait</option>
                            <option className="border-2 w-full p-4" value="KG">Kyrgyzstan</option>
                            <option className="border-2 w-full p-4" value="LA">Lao People's Democratic Republic</option>
                            <option className="border-2 w-full p-4" value="LV">Latvia</option>
                            <option className="border-2 w-full p-4" value="LB">Lebanon</option>
                            <option className="border-2 w-full p-4" value="LS">Lesotho</option>
                            <option className="border-2 w-full p-4" value="LR">Liberia</option>
                            <option className="border-2 w-full p-4" value="LY">Libyan Arab Jamahiriya</option>
                            <option className="border-2 w-full p-4" value="LI">Liechtenstein</option>
                            <option className="border-2 w-full p-4" value="LT">Lithuania</option>
                            <option className="border-2 w-full p-4" value="LU">Luxembourg</option>
                            <option className="border-2 w-full p-4" value="MO">Macao</option>
                            <option className="border-2 w-full p-4" value="MK">Macedonia, the Former Yugoslav Republic of</option>
                            <option className="border-2 w-full p-4" value="MG">Madagascar</option>
                            <option className="border-2 w-full p-4" value="MW">Malawi</option>
                            <option className="border-2 w-full p-4" value="MY">Malaysia</option>
                            <option className="border-2 w-full p-4" value="MV">Maldives</option>
                            <option className="border-2 w-full p-4" value="ML">Mali</option>
                            <option className="border-2 w-full p-4" value="MT">Malta</option>
                            <option className="border-2 w-full p-4" value="MH">Marshall Islands</option>
                            <option className="border-2 w-full p-4" value="MQ">Martinique</option>
                            <option className="border-2 w-full p-4" value="MR">Mauritania</option>
                            <option className="border-2 w-full p-4" value="MU">Mauritius</option>
                            <option className="border-2 w-full p-4" value="YT">Mayotte</option>
                            <option className="border-2 w-full p-4" value="MX">Mexico</option>
                            <option className="border-2 w-full p-4" value="FM">Micronesia, Federated States of</option>
                            <option className="border-2 w-full p-4" value="MD">Moldova, Republic of</option>
                            <option className="border-2 w-full p-4" value="MC">Monaco</option>
                            <option className="border-2 w-full p-4" value="MN">Mongolia</option>
                            <option className="border-2 w-full p-4" value="ME">Montenegro</option>
                            <option className="border-2 w-full p-4" value="MS">Montserrat</option>
                            <option className="border-2 w-full p-4" value="MA">Morocco</option>
                            <option className="border-2 w-full p-4" value="MZ">Mozambique</option>
                            <option className="border-2 w-full p-4" value="MM">Myanmar</option>
                            <option className="border-2 w-full p-4" value="NA">Namibia</option>
                            <option className="border-2 w-full p-4" value="NR">Nauru</option>
                            <option className="border-2 w-full p-4" value="NP">Nepal</option>
                            <option className="border-2 w-full p-4" value="NL">Netherlands</option>
                            <option className="border-2 w-full p-4" value="AN">Netherlands Antilles</option>
                            <option className="border-2 w-full p-4" value="NC">New Caledonia</option>
                            <option className="border-2 w-full p-4" value="NZ">New Zealand</option>
                            <option className="border-2 w-full p-4" value="NI">Nicaragua</option>
                            <option className="border-2 w-full p-4" value="NE">Niger</option>
                            <option className="border-2 w-full p-4" value="NG">Nigeria</option>
                            <option className="border-2 w-full p-4" value="NU">Niue</option>
                            <option className="border-2 w-full p-4" value="NF">Norfolk Island</option>
                            <option className="border-2 w-full p-4" value="MP">Northern Mariana Islands</option>
                            <option className="border-2 w-full p-4" value="NO">Norway</option>
                            <option className="border-2 w-full p-4" value="OM">Oman</option>
                            <option className="border-2 w-full p-4" value="PK">Pakistan</option>
                            <option className="border-2 w-full p-4" value="PW">Palau</option>
                            <option className="border-2 w-full p-4" value="PS">Palestinian Territory, Occupied</option>
                            <option className="border-2 w-full p-4" value="PA">Panama</option>
                            <option className="border-2 w-full p-4" value="PG">Papua New Guinea</option>
                            <option className="border-2 w-full p-4" value="PY">Paraguay</option>
                            <option className="border-2 w-full p-4" value="PE">Peru</option>
                            <option className="border-2 w-full p-4" value="PH">Philippines</option>
                            <option className="border-2 w-full p-4" value="PN">Pitcairn</option>
                            <option className="border-2 w-full p-4" value="PL">Poland</option>
                            <option className="border-2 w-full p-4" value="PT">Portugal</option>
                            <option className="border-2 w-full p-4" value="PR">Puerto Rico</option>
                            <option className="border-2 w-full p-4" value="QA">Qatar</option>
                            <option className="border-2 w-full p-4" value="RE">Reunion</option>
                            <option className="border-2 w-full p-4" value="RO">Romania</option>
                            <option className="border-2 w-full p-4" value="RU">Russian Federation</option>
                            <option className="border-2 w-full p-4" value="RW">Rwanda</option>
                            <option className="border-2 w-full p-4" value="BL">Saint Barthelemy</option>
                            <option className="border-2 w-full p-4" value="SH">Saint Helena</option>
                            <option className="border-2 w-full p-4" value="KN">Saint Kitts and Nevis</option>
                            <option className="border-2 w-full p-4" value="LC">Saint Lucia</option>
                            <option className="border-2 w-full p-4" value="MF">Saint Martin</option>
                            <option className="border-2 w-full p-4" value="PM">Saint Pierre and Miquelon</option>
                            <option className="border-2 w-full p-4" value="VC">Saint Vincent and the Grenadines</option>
                            <option className="border-2 w-full p-4" value="WS">Samoa</option>
                            <option className="border-2 w-full p-4" value="SM">San Marino</option>
                            <option className="border-2 w-full p-4" value="ST">Sao Tome and Principe</option>
                            <option className="border-2 w-full p-4" value="SA">Saudi Arabia</option>
                            <option className="border-2 w-full p-4" value="SN">Senegal</option>
                            <option className="border-2 w-full p-4" value="RS">Serbia</option>
                            <option className="border-2 w-full p-4" value="CS">Serbia and Montenegro</option>
                            <option className="border-2 w-full p-4" value="SC">Seychelles</option>
                            <option className="border-2 w-full p-4" value="SL">Sierra Leone</option>
                            <option className="border-2 w-full p-4" value="SG">Singapore</option>
                            <option className="border-2 w-full p-4" value="SX">Sint Maarten</option>
                            <option className="border-2 w-full p-4" value="SK">Slovakia</option>
                            <option className="border-2 w-full p-4" value="SI">Slovenia</option>
                            <option className="border-2 w-full p-4" value="SB">Solomon Islands</option>
                            <option className="border-2 w-full p-4" value="SO">Somalia</option>
                            <option className="border-2 w-full p-4" value="ZA">South Africa</option>
                            <option className="border-2 w-full p-4" value="GS">South Georgia and the South Sandwich Islands</option>
                            <option className="border-2 w-full p-4" value="SS">South Sudan</option>
                            <option className="border-2 w-full p-4" value="ES">Spain</option>
                            <option className="border-2 w-full p-4" value="LK">Sri Lanka</option>
                            <option className="border-2 w-full p-4" value="SD">Sudan</option>
                            <option className="border-2 w-full p-4" value="SR">Suriname</option>
                            <option className="border-2 w-full p-4" value="SJ">Svalbard and Jan Mayen</option>
                            <option className="border-2 w-full p-4" value="SZ">Swaziland</option>
                            <option className="border-2 w-full p-4" value="SE">Sweden</option>
                            <option className="border-2 w-full p-4" value="CH">Switzerland</option>
                            <option className="border-2 w-full p-4" value="SY">Syrian Arab Republic</option>
                            <option className="border-2 w-full p-4" value="TW">Taiwan, Province of China</option>
                            <option className="border-2 w-full p-4" value="TJ">Tajikistan</option>
                            <option className="border-2 w-full p-4" value="TZ">Tanzania, United Republic of</option>
                            <option className="border-2 w-full p-4" value="TH">Thailand</option>
                            <option className="border-2 w-full p-4" value="TL">Timor-Leste</option>
                            <option className="border-2 w-full p-4" value="TG">Togo</option>
                            <option className="border-2 w-full p-4" value="TK">Tokelau</option>
                            <option className="border-2 w-full p-4" value="TO">Tonga</option>
                            <option className="border-2 w-full p-4" value="TT">Trinidad and Tobago</option>
                            <option className="border-2 w-full p-4" value="TN">Tunisia</option>
                            <option className="border-2 w-full p-4" value="TR">Turkey</option>
                            <option className="border-2 w-full p-4" value="TM">Turkmenistan</option>
                            <option className="border-2 w-full p-4" value="TC">Turks and Caicos Islands</option>
                            <option className="border-2 w-full p-4" value="TV">Tuvalu</option>
                            <option className="border-2 w-full p-4" value="UG">Uganda</option>
                            <option className="border-2 w-full p-4" value="UA">Ukraine</option>
                            <option className="border-2 w-full p-4" value="AE">United Arab Emirates</option>
                            <option className="border-2 w-full p-4" value="GB">United Kingdom</option>
                            <option className="border-2 w-full p-4" value="US">United States</option>
                            <option className="border-2 w-full p-4" value="UM">United States Minor Outlying Islands</option>
                            <option className="border-2 w-full p-4" value="UY">Uruguay</option>
                            <option className="border-2 w-full p-4" value="UZ">Uzbekistan</option>
                            <option className="border-2 w-full p-4" value="VU">Vanuatu</option>
                            <option className="border-2 w-full p-4" value="VE">Venezuela</option>
                            <option className="border-2 w-full p-4" value="VN">Viet Nam</option>
                            <option className="border-2 w-full p-4" value="VG">Virgin Islands, British</option>
                            <option className="border-2 w-full p-4" value="VI">Virgin Islands, U.s.</option>
                            <option className="border-2 w-full p-4" value="WF">Wallis and Futuna</option>
                            <option className="border-2 w-full p-4" value="EH">Western Sahara</option>
                            <option className="border-2 w-full p-4" value="YE">Yemen</option>
                            <option className="border-2 w-full p-4" value="ZM">Zambia</option>
                            <option className="border-2 w-full p-4" value="ZW">Zimbabwe</option>
                        </select>
                    </div>
                    <div className='mb-10'>
    <label className='block mb-2 text-slate-400' htmlFor="last_name">Last Name</label>
    <input value={last_name} onChange={(e) => setLastName(e.target.value)} id='last_name' name='last_name' className='border-2 w-full p-4' type="text" />
</div>

                    <div className='mb-8'>
                        <label className='block mb-2 text-slate-400' htmlFor="address2">Address Line 2</label>
                        <input value={address_2} onChange={(e) => setAddress2(e.target.value)} id='address2' name='address2' className='border-2 w-full p-4' type="text" />
                    </div>
                    <div className='mb-8'>
                        <label className='block mb-2 text-slate-400' htmlFor="zip">Zip</label>
                        <input value={zip} onChange={(e) => setZip(e.target.value)} id='zip' name='zip' className='border-2 w-full p-4' type="text" />
                    </div>
                </div>
            </div>
            <div className='flex justify-around mx-auto'>
                <button onClick={handleSubmit} className='font-bold bg-larq px-12 py-2 text-white'>
                    Create Account
                </button>
            </div>
        </div>
    );
};

export default Register;
