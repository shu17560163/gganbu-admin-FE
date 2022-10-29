import { Input, Button, Form } from "antd"

import { Check, X, UserPlus } from "phosphor-react"

import { useState } from "react"
import { useNavigate } from "react-router"
import { createFormItems } from "../../components/form/formConfig"

const InitAdmin = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  })

  const [loading, setLoading] = useState(false) // login button loading

  const handleLogin = async () => {
    try {
      console.log(data.username)
    } catch (error) {
      console.log(error)
    }
  }

  const confirmPass = data.password && data.confirmPassword && data.password === data.confirmPassword
  const canCreate = data.username && confirmPass

  return (
    // userlayout
    <div
      className="w-full h-full relative"
      style={{
        background: "linear-gradient(180deg, #a1dff5 0%, #e4eff8 100%)",
      }}
    >
      {/* loginFormWrapper  */}
      <div className="w-max absolute left-0 right-0 top-0 bottom-0 m-auto flex items-center h-max">
        <div>
          {/* header text */}
          <h1 className="text-center text-5xl">Gganbu Admin</h1>

          {/* login form  */}
          <div className="p-5 min-w-max">
            <Form {...{ labelAlign: "left", labelCol: { span: 9 } }}>
              {createFormItems([
                {
                  children: (
                    <>
                      <div className="font-bold text-lg">New Installation</div>
                      <div className="text-[gray]">Please create the initial administrator user.</div>
                    </>
                  ),
                },
                {
                  label: "Username",
                  children: (
                    <Input
                      allowClear
                      placeholder="Username"
                      value={data.username}
                      onChange={(e) => setData({ ...data, username: e.target.value })}
                    />
                  ),
                },
                {
                  label: "Password",
                  children: (
                    <Input
                      allowClear
                      type="password"
                      placeholder="Password"
                      value={data.password}
                      onChange={(e) => setData({ ...data, password: e.target.value })}
                    />
                  ),
                },
                {
                  label: "Confirm Password",
                  children: (
                    <Input
                      suffix={(confirmPass && <Check color="green" size={20} />) || <X color="red" size={20} />}
                      allowClear
                      type="password"
                      placeholder="Confirm Password"
                      value={data.confirmPassword}
                      onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                    />
                  ),
                },
                {
                  children: (
                    <Button
                      disabled={!canCreate}
                      block
                      loading={loading}
                      type="primary"
                      onClick={() => handleLogin()}
                      className="flex items-center justify-center gap-2"
                    >
                      <UserPlus size={20} />
                      <div>Creat User</div>
                    </Button>
                  ),
                },
              ])}
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default InitAdmin
