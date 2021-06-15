<template>
  <b-container class="my-3" fluid>
    <b-row>
      <b-col>
        <b-row>
          <b-col sm="4" class="mx-auto">
            <b-form
              class="register-form text-left"
              @submit.prevent="registerHandler"
            >
              <b-row class="text-center">
                <img src="../assets/logo.png" class="mx-auto text-center" />
              </b-row>
              <h3>Register Form</h3>
              <b-form-group
                label="อีเมล์"
                class="mb-3"
                :invalid-feedback="emailValidator.invalidMessage"
                :valid-feedback="emailValidator.validMessage"
                :state="emailValidator.state"
              >
                <b-form-input
                  type="email"
                  placeholder="อีเมล์"
                  v-model="register.email"
                  :state="emailValidator.state"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                label="ชื่อผู้ใช้งาน"
                class="mb-3"
                :invalid-feedback="usernameValidator.invalidMessage"
                :valid-feedback="usernameValidator.validMessage"
                :state="usernameValidator.state"
              >
                <b-form-input
                  type="text"
                  v-model="register.username"
                  placeholder="ชื่อผู้ใช้งาน"
                  :state="usernameValidator.state"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                class="mb-3"
                label="รหัสผ่าน"
                :invalid-feedback="passwordValidator.invalidMessage"
                :valid-feedback="passwordValidator.validMessage"
                :state="passwordValidator.state"
              >
                <b-form-input
                  type="password"
                  v-model="register.password"
                  placeholder="รหัสผ่าน"
                  :state="passwordValidator.state"
                ></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-button type="submit" variant="primary">Register</b-button>
                <b-button
                  type="reset"
                  variant="default"
                  class="border-color-secondary"
                  >Reset</b-button
                >
              </b-form-group>
            </b-form>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            Email: <span class="text-info">{{ register.email }} </span>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            Username: <span class="text-info">{{ register.username }} </span>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            Password: <span class="text-info">{{ register.password }} </span>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            Form status: <span class="text-info">{{ isValid }} </span>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  computed: {
    isValid() {
      return (
        [
          this.emailValidator.state,
          this.usernameValidator.state,
          this.passwordValidator.state,
        ].filter((f) => !f).length == 0
      );
    },
    emailValidator() {
      if (this.register.email == "" && !this.validation.submit) {
        return {
          state: false,
        };
      }

      if (this.register.email == "" && this.validation.submit) {
        return {
          state: false,
          invalidMessage: "กรุณาป้อนอีเมล์",
        };
      }

      if (this.register.email.length < 4) {
        return {
          state: false,
          invalidMessage: "กรุณาป้อนอีเมล์ไม่น้อยกว่า 4 อักษร",
        };
      }

      if (this.register.email.length > 150) {
        return {
          state: false,
          invalidMessage: "กรุณาป้อนอีเมล์ไม่เกิน 150 ตัวอักษร",
        };
      }

      return {
        state: true,
      };
    },
    usernameValidator() {
      if (this.register.username == "" && this.validation.submit) {
        return {
          state: false,
        };
      }

      if (this.register.username == "" && !this.validation.submit) {
        return {
          state: false,
          invalidMessage: "กรุณาป้อนชื่อผู้ใช้งาน",
        };
      }

      if (this.register.username.length < 4) {
        return {
          state: false,
          invalidMessage: "กรุณาป้อนชื่อผู้ใช้งานไม่น้อยกว่า 4 ตัวอักษร",
        };
      }

      if (this.register.username.length > 20) {
        return {
          state: false,
          invalidMessage: "กรุณาป้อนชื่อผู้ใช้งานไม่เกิน 20 ตัวอักษร",
        };
      }

      return {
        state: true,
      };
    },
    passwordValidator() {
      if (this.register.password == "" && this.validation.submit) {
        return {
          state: false,
        };
      }

      if (this.register.password == "" && !this.validation.submit) {
        return {
          state: false,
          invalidMessage: "กรุณาป้อนรหัสผ่าน",
        };
      }

      if (this.register.password.length < 6) {
        return {
          state: false,
          invalidMessage: "กรุณาป้อนรหัสผ่านไม่น้อยกว่า 6 ตัวอักษร",
        };
      }

      if (this.register.password.length > 30) {
        return {
          state: false,
          invalidMessage: "กรุณาป้อนรหัสผ่านไม่เกิน 30 ตัวอักษร",
        };
      }

      return {
        state: true,
      };
    },
  },
  data() {
    return {
      validation: {
        submit: true,
      },
      register: {
        email: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    registerHandler() {
      if (!this.validation.submit) this.validation.submit = true;

      if (!this.isValid) {
        alert("Form invalid");
      }
    },
  },
};
</script>

<style>
.register-form {
  border: 1px solid #e5e5e5;
  padding: 2rem;
}
</style>
