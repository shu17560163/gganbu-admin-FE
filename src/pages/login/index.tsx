import { Tabs, Input, Button, message, notification } from "antd";

import {
  User,
  Lock,
  EnvelopeSimple,
  DeviceMobileSpeaker,
} from "phosphor-react";

import { useState } from "react";
import { useNavigate } from "react-router";
import "./index.css";
import { StaffApi } from "../../api";

export function timeFix() {
  const hour = new Date().getHours();
  return hour < 12
    ? "Good Morning"
    : hour < 18
    ? "Good Afternoon"
    : "Good Evening";
}

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  const [loading, setLoading] = useState(false); // login button loading
  const [tabKey, setTabKey] = useState("username");
  const [countState, setCountState] = useState({
    smsSendBtn: false, // 转圈圈
    time: 60, // 倒计时60秒
  });

  const getCode = async () => {
    if (!/^\d{8}$/.test(phone)) {
      return message.error("Invalid Phone Number");
    }
    try {
      setLoading(true);
      await StaffApi.getCode({ phone });
      message.success("Code sent successfully");

      setCountState({ smsSendBtn: true, time: 60 });
      const interval = window.setInterval(() => {
        if (countState.time - 1 <= 0) {
          setCountState({ smsSendBtn: false, time: 60 });
          window.clearInterval(interval);
        }
        setCountState({ smsSendBtn: true, time: countState.time - 1 });
      }, 1000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    let res: unknown;
    try {
      if (tabKey == "username") {
        if (!username) {
          return message.error("Please Input Username");
        }
        if (!password) {
          return message.error("Please Input Password");
        }
        res = await StaffApi.login({ type: "username", username, password });
      } else {
        if (!phone) {
          return message.error("Please Input Phone");
        }
        if (!code) {
          return message.error("Please Input Code");
        }
        res = await StaffApi.login({ type: "phone", phone, code });
      }
      console.log(res, "登陆返回信息");
      localStorage.setItem("authToken", res.token);
      navigate("/");
      setTimeout(() => {
        notification.success({
          message: "👏👏👏Welcome👏👏👏",
          description: `${timeFix()},  Welcome Back `,
        });
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // userlayout
    <div
      className="w-full h-full relative"
      style={{
        background: "linear-gradient(180deg, #a1dff5 0%, #e4eff8 100%)",
      }}
    >
      {/* <img
        className="absolute left-0 right-0 top-0 bottom-0 lg:h-screen m-auto opacity-70 max-w-full"
        src={Logo}
        alt=""
      /> */}
      {/* loginFormWrapper  */}
      <div
        className="w-96 absolute left-0 right-0 top-0 bottom-0 m-auto flex items-center h-max"
        style={{ minWidth: 260 }}
      >
        <div>
          {/* header text */}
          <h1 className="text-center text-5xl">Gganbu Admin</h1>

          {/* login form  */}
          <div
            className="py-16 px-5 rounded-2xl m-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
          >
            <Tabs type="card" centered onChange={(key) => setTabKey(key)}>
              <Tabs.TabPane key="username" tab="Username">
                <Input
                  className="mb-4"
                  allowClear
                  size="large"
                  placeholder="Username"
                  prefix={<User size={20} />}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onPressEnter={() => handleLogin()}
                />
                <Input
                  allowClear
                  size="large"
                  type="password"
                  placeholder="Password"
                  prefix={<Lock size={20} />}
                  className="mb-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onPressEnter={() => handleLogin()}
                />
              </Tabs.TabPane>
              <Tabs.TabPane key="phone" tab="Phone">
                <Input
                  className="mb-4"
                  allowClear
                  size="large"
                  placeholder="Phone"
                  prefix={<DeviceMobileSpeaker size={20} />}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onPressEnter={() => handleLogin()}
                />
                <div className="flex items-center mb-4">
                  <Input
                    allowClear
                    size="large"
                    placeholder="Code"
                    prefix={<EnvelopeSimple size={20} />}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    onPressEnter={() => handleLogin()}
                  />
                  <Button
                    size="large"
                    className="ml-2 min-h-full"
                    onClick={() => getCode()}
                  >
                    {(countState.smsSendBtn && `${countState.time}s`) ||
                      "Get Code"}
                  </Button>
                </div>
              </Tabs.TabPane>
            </Tabs>
            <Button
              loading={loading}
              className="w-full h-10 text-lg py-0 px-4"
              size="large"
              type="primary"
              onClick={() => handleLogin()}
            >
              Log in
            </Button>
          </div>
        </div>
      </div>

      {/* footer */}

      <div className="fixed bottom-0 w-full p-10">
        <div className="mb-2 flex justify-center items-center">
          <a className="mr-10">Help</a>
          <a className="mr-10">Policy</a>
          <a>Service</a>
        </div>
        <div className=" flex justify-center">Copyright &copy; 2022</div>
      </div>
    </div>
  );
};
export default Login;
