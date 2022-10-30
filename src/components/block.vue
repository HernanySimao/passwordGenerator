<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex justify-content-center">
          <div class="photo mt-4"></div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <h4 class="text-center text-white mt-2">Password Generator</h4>
        <h5 class="text-center bg">{{ copied }}</h5>
      </div>
    </div>

    <div class="row">
      <div class="d-flex justify-content-center">
        <div class="col-md-6">
          <form>
            <input
              class="form-control mb-2"
              type="text"
              name=""
              id=""
              placeholder="Create password"
              :value="this.senha"
              disabled
            />
          </form>
          <button @click.prevent.stop="genPassword()" class="btn btn-dark w-50">
            Generete
          </button>

          <button
            @click.prevent.stop="copy()"
            :disabled="this.on"
            class="btn btn-primary w-50"
          >
            Copy
          </button>
        </div>
      </div>
    </div>

    <div class="poupo">
      <a
        href="https://my-portfolio-hernanysimao.vercel.app/"
        class="port"
        target="_blank"
      >
        <img src="@/assets/my.png" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "block",
  data() {
    return {
      senha: "",
      copied: "",
      on: true,
    };
  },

  methods: {
    genPassword() {
      var chars =
        "0123456789abcdefghijklmnopqrstuvwxyz!@#$%*-_><()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var password = "";

      for (var i = 0; i <= 12; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
        this.senha = password;
      }

      this.on = false;
    },

    copy() {
      this.$copyText(this.senha)
        .then(() => {
          this.copied = "Copied";
          setTimeout(() => {
            this.copied = "";
          }, 3000);
        })
        .catch(() => {
          this.copied = "Failed copy";
        });
    },
  },
};
</script>

<style scoped>
.photo {
  border: 2px solid white;
  width: 25vh;
  height: 25vh;
  border-radius: 50%;
  background: url("@/assets/icon.jpg") no-repeat center;
  object-fit: cover;
  background-size: 150%;
}

.bg {
  color: #00bfff;
}
button {
  margin: 0 auto;
}

.port {
  position: fixed;
  cursor: pointer;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 23px;
  border-radius: 50%;
  z-index: 1000;
  transition: 0.9s;
}

.port:hover {
  transition: 0.9s;
  filter: brightness(50%);
}

img {
  width: 60px;
  height: 60px;
}
</style>