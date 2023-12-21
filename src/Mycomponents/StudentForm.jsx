import { useState } from "react";
import "./StudentForm.css";

const StudentForm = () => {
  const [Name, setname] = useState("");
  const [NameError, setNameError] = useState(false);
  const [Mobile, setmobile] = useState("");
  const [MobileError, setMobileError] = useState("");
  const [Email, setemail] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [Gender, setgender] = useState("");
  const [GenderError, setGenderError] = useState("");
  const [Address, setaddress] = useState("");
  const [AddressError, setAddressError] = useState("");
  const [Caddress, setcaddress] = useState("");
  const [CaddressError, setCaddressError] = useState("");
  const [Pincode, setpincode] = useState("");
  const [PincodeError, setPincodeError] = useState("");
  const [Check, setcheck] = useState(false);
  const [StudentData, setstudentdata] = useState([]);

  const namechange = (event) => {
    setname(event.target.value);
    if (Name != "") {
      setNameError("");
    }
  };

  const mobilechange = (event) => {
    setmobile(event.target.value);
    if (Mobile.length == 10) {
      setMobileError("");
    }
  };
  const emailchange = (event) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setemail(event.target.value);
    if (emailRegex.test(Email)) {
      setEmailError("");
    }
  };

  const addresschange = (event) => {
    setaddress(event.target.value);
    if (Address != "") {
      setAddressError("");
    }
  };
  const caddresschange = (event) => {
    setcaddress(event.target.value);
    if (Caddress != "") {
      setCaddressError("");
    }
  };
  const pincodechange = (event) => {
    setpincode(event.target.value);
    if (Pincode == 7) {
      setPincodeError("");
    }
  };
  const genderchange = (event) => {
    setgender(event.target.value);
    if (Gender != "") {
      setGenderError("");
    }
  };
  const chekboxchange = (event) => {
    setcheck(event.target.checked);
    setaddress(Caddress);
  };

  const clearState = () => {
    setname("");
    setmobile("");
    setemail("");
    setcaddress("");
    setaddress("");
    setpincode("");

    if (Check) {
      setcheck(!Check);
    }
    handleReset();
  };

  const handleReset = () => {
    setgender("");
  };

  const validation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[6-9]\d{9}$/;

    var a = emailRegex.test(Email);
    console.log(a);
    if (Name == "") {
      setNameError("Please enter your full name. ");
      return;
    }
    if (Name != "") {
      setNameError("");
    }

    if (Mobile.length < 10 || Mobile.length > 10) {
      setMobileError("Please enter correct mobile number. ");
      return;
    }
    if (!mobileRegex.test(Mobile)) {
      setMobileError("Invalid Mobile Number");
    }
    if (mobileRegex.test(Mobile)) {
      setMobileError("");
    }

    if (Email == "") {
      setEmailError("Please Enter your mail id ");
      return;
    }
    if (!emailRegex.test(Email)) {
      setEmailError("Invalid  Email ");
      return;
    }
    if (emailRegex.test(Email)) {
      setEmailError("");
    }

    if (Caddress == "") {
      setCaddressError("Please enter your current address");
      return;
    }
    if (Caddress != "") {
      setCaddressError("");
    }
    if (Address == "") {
      setAddressError("Please enter your permanent address");
      return;
    }
    if (Address != "") {
      setAddressError("");
    }

    if (Pincode.length < 7 || Pincode.length > 7) {
      setPincodeError("Please Enter correct pincode");
      return;
    }

    if (Pincode.length == 7) {
      setPincodeError("");
    }

    if (Gender == "") {
      setGenderError("Please select your gender");
      return;
    }
    if (Gender != "") {
      setGenderError("");
    }

    var arr = [Name, Mobile, Email, Caddress, Address, Pincode, Gender];
    setstudentdata([...StudentData, arr]);
    console.log("Studentdata.....", StudentData);
    clearState();
  };

  return (
    <div className="maindiv">
      <div className="formdiv">
        <h3>Student Form</h3>
        <div className="formitem">
          <label>
            Name:
            <input
              type="text"
              placeholder=" Enter Full Name"
              value={Name}
              onChange={namechange}
              required
            />
          </label>
          <br />
          <span style={{ color: "red", fontSize: 13 }}>{NameError}</span>
        </div>

        <div className="formitem">
          <label>
            Mobile No:
            <input
              type="text"
              value={Mobile}
              onChange={mobilechange}
              maxLength={10}
              placeholder="Mobile Number"
              required
            />
          </label>
          <br />
          <span style={{ color: "red", fontSize: 13 }}>{MobileError}</span>
        </div>

        <div className="formitem">
          <label>
            Mail Id:
            <input
              type="email"
              value={Email}
              onChange={emailchange}
              required
              placeholder="Enter email"
            />
          </label>
          <br />
          <span style={{ color: "red", fontSize: 13 }}>{EmailError}</span>
        </div>

        <div className="formitem">
          <label>
            Current Address:
            <input
              type="text"
              value={Caddress}
              onChange={caddresschange}
              placeholder="Enter Current Address"
              required
            />
          </label>
          <br />
          <span style={{ color: "red", fontSize: 13 }}>{CaddressError}</span>
        </div>
        <div className="formitem">
          <label>
            current address is same as Permanent Address:
            <input
              type="checkbox"
              id="checkbox"
              value={Check}
              checked={Check}
              onChange={chekboxchange}
            />
          </label>
        </div>

        <div className="formitem">
          <label>
            Permanent Address:
            <input
              type="text"
              value={Address}
              placeholder="Enter permanent address"
              onChange={addresschange}
              required
            />
          </label>
          <br />
          <span style={{ color: "red", fontSize: 13 }}>{AddressError}</span>
        </div>

        <div className="formitem">
          <label>
            Pincode:
            <input
              type="number"
              value={Pincode}
              onChange={pincodechange}
              placeholder="Enter pincode"
              required
            />
          </label>
          <br />
          <span style={{ color: "red", fontSize: 13 }}>{PincodeError}</span>
        </div>

        <div className="formitem">
          Select your Gender
          <label>
            <input
              type="radio"
              value="Male"
              name="mygender"
              onChange={genderchange}
              checked={Gender === "Male"}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="Female"
              name="mygender"
              checked={Gender === "Female"}
              onChange={genderchange}
            />
            Female
          </label>
          <br />
          <span style={{ color: "red", fontSize: 13 }}>{GenderError}</span>
        </div>

        <button onClick={validation}>Submit</button>
      </div>
      <div className="tablediv">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile No</th>
              <th>Email Id</th>
              <th> Current Address</th>
              <th>Permanent Address</th>
              <th>Pincode</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {StudentData.map((row) => (
              <tr>
                {row.map((val) => (
                  <td>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default StudentForm;
