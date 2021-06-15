<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-row class="my-3">
          <b-col sm="4" class="mx-auto">
            <b-form class="login-form text-left" @submit.prevent="loginSubmit">
              <h3>Login Form</h3>
              <b-form-group
                label="Username"
                class="mb-3"
                :invalid-feedback="usernameValidator.invalidMessage"
                :valid-feedback="usernameValidator.validMessage"
                :state="usernameValidator.state"
              >
                <b-form-input
                  placeholder="ป้อนชื่อผู้ใช้งาน"
                  type="text"
                  v-model="login.username"
                  :state="usernameValidator.state"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                label="Password"
                class="mb-3"
                :invalid-feedback="passwordValidator.invalidMessage"
                :valid-feedback="passwordValidator.validMessage"
                :state="passwordValidator.state"
              >
                <b-form-input
                  placeholder="ป้อนรหัสผ่าน"
                  type="password"
                  value=""
                  v-model="login.password"
                  :state="passwordValidator.state"
                ></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-button type="submit" variant="primary">
                  Login
                </b-button>
              </b-form-group>
            </b-form>
          </b-col>
        </b-row>
        <b-row class="mb-3">
          <b-col>
            Username: <span class="text-info ml-1">{{ login.username }}</span>
          </b-col>
        </b-row>
        <b-row class="mb-3">
          <b-col>
            Password: <span class="text-info ml-1">{{ login.password }}</span>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  mounted() {
    this.login.username = "";
    this.login.password = "";
  },
  computed: {
    isValid() {
      return (
        [this.usernameValidator.state, this.passwordValidator.state].filter(
          (f) => !f
        ).length == 0
      );
    },
    usernameValidator() {
      if (this.login.username == "" && !this.validation.submit)
        return { state: false };

      if (this.login.username == "" && this.validation.submit) {
        return {
          state: false,
          invalidMessage: "กรุณาป้อนชื่อผู้ใช้งาน",
          validMessage: "",
        };
      }

      if (this.login.username.length < 4) {
        return {
          state: false,
          invalidMessage: "กรุณาป้อนชื่อผู้ใช้งานมากกว่า 4 ตัวอักษร",
          validMessage: "",
        };
      }

      if (this.login.username.length > 20) {
        return {
          state: false,
          invalidMessage: "กรุณาป้อนชื่อผู้ใช้งานไม่เกิน 20 ตัวอักษร",
        };
      }

      return {
        state: true,
        invalidMessage: "",
        validMessage: "",
      };
    },
    passwordValidator() {
      if (this.login.password == "" && !this.validation.submit)
        return { state: false };

      if (this.login.password == "" && this.validation.submit) {
        return {
          state: false,
          invalidMessage: "กรุณาป้อนรหัสผ่าน",
        };
      }

      if (this.login.password.length < 6) {
        return {
          state: false,
          invalidMessage: "กรุณาป้อนรหัสมากกว่า 6 ตัวอักษร",
        };
      }

      if (this.login.password.length > 30) {
        return {
          state: false,
          invalidMessage: "กรุณาป้อนรหัสผ่านไม่เกิน 30 คัวอักษร",
        };
      }

      return {
        state: true,
        invalidMessage: "",
        validMessage: "",
      };
    },
  },
  data() {
    return {
      validation: {
        submit: false,
      },
      login: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    loginSubmit() {
      if (!this.validation.submit) this.validation.submit = true;

      if (!this.isValid) {
        alert("Form Invalid");
      }
    },
  },
};
</script>

<style>
.login-form {
  border: 1px solid #e5e5e5;
  padding: 2rem;
}
</style>
