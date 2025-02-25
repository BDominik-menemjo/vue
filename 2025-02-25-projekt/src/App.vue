<script setup>
import { ref } from 'vue';
import axios from 'axios';

const crudApi = "https://reeldev.hu/api/67b58345cab89993401111/randomuser";
const userDatas = ref([]);
const name = ref();
const email = ref();
const phone = ref();
const username = ref();
const usernameFromUser = ref("");
const password = ref("");
const passwordFromUser = ref("");
const editUser = ref();
const isLoggedIn = ref(false);
const loginError = ref("");
const currentUser = ref(null);

const getDatas = async () => {
  await axios.get(crudApi)
    .then(response => {
      userDatas.value = response.data;
    })
    .catch(error => {
      console.error("Error: " + error)
    })
}
getDatas();

const deleteUser = async (id) => {
  if (confirm("Are you sure?")) {
    await axios.delete(crudApi + "/" + id)
      .then(response => {
        alert("Delete was successful!");
        getDatas();
        isLoggedIn.value = false;
        currentUser.value = null;
        usernameFromUser.value = "";
        passwordFromUser.value = "";
      })
      .catch(error => {
        console.error("Error: " + error);
      })
  }
}

const editUserDatas = async (data) => {
  name.value = data.name;
  username.value = data.username;
  phone.value = data.phone;
  username.value = data.username;
  password.value = data.password;
  editUser.value = data;
}

const updateUserData = async () => {
  editUser.value.name = name.value;
  editUser.value.username = username.value;
  editUser.value.phone = phone.value;

  await axios.put(crudApi + "/" + editUser.value.id, {
    name: editUser.value.name,
    email: editUser.value.email,
    country: editUser.value.country,
    phone: editUser.value.phone,
    city: editUser.value.city,
    postcode: editUser.value.postcode,
    street: editUser.value.street,
    state: editUser.value.state,
    picture: editUser.value.picture,
    username: editUser.value.username,
    password: editUser.value.password,
    salt: editUser.value.salt,
    sha1: editUser.value.sha1
  })
    .then(response => {
      alert("Update was successful!");
      getDatas();
    })
    .catch(error => {
      console.error("Error: " + error);
    })
}

const login = () => {
  loginError.value = "";

  let foundUser = null;
  for (let i = 0; i < userDatas.value.length; i++) {
    if (userDatas.value[i].username === usernameFromUser.value && userDatas.value[i].password === passwordFromUser.value) {
      foundUser = userDatas.value[i];
    }
  }

  if (foundUser) {
    isLoggedIn.value = true;
    currentUser.value = foundUser;
    loginError.value = "";
  } else {
    loginError.value = "Hibás felhasználónév vagy jelszó!";
    isLoggedIn.value = false;
    currentUser.value = null;
  }
}

const logout = () => {
  isLoggedIn.value = false;
  currentUser.value = null;
  usernameFromUser.value = "";
  passwordFromUser.value = "";
}
</script>

<template>
  <div class="container">
    <section class="mt-5" v-if="!isLoggedIn">
      <form>
        <h2>Bejelentkezés</h2>
        <div class="form-group">
          <input type="text" class="form-control" id="username" placeholder="Felhasználónév" v-model="usernameFromUser"
            required>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="password" placeholder="Jelszó" v-model="passwordFromUser"
            required>
        </div>
        <div v-if="loginError" class="error-message">
          {{ loginError }}
        </div>
        <button type="button" class="btn" @click="login">Bejelentkezés</button>
      </form>
    </section>
    <section v-else class="logged-in-section">
      <div class="user-card">
        <h2>Üdvözlünk, {{ currentUser.name }}!</h2>
        <div class="user-info">
          <div v-if="currentUser.picture" class="user-picture">
            <img :src="currentUser.picture" alt="Profile picture">
          </div>
          <div class="user-details">
            <p><strong>Felhasználónév:</strong> {{ currentUser.username }}</p>
            <p><strong>Telefon:</strong> {{ currentUser.phone }}</p>
            <p v-if="currentUser.email"><strong>Email:</strong> {{ currentUser.email }}</p>
            <p v-if="currentUser.city"><strong>Város:</strong> {{ currentUser.city }}</p>
          </div>
        </div>
        <button class="btn logout-btn" @click="logout">Kijelentkezés</button>
        <button class="btn delete-btn" @click="deleteUser(currentUser.id)">Törlés</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 80%;
  margin: 0 auto;
  padding: 20px;
}

form {
  justify-content: center;
  padding: 10%;
  margin: auto;
  height: 70vh;
  width: 40vw;
  text-align: center;
  background-color: beige;
  border: 2px solid rgb(14, 79, 14);
  border-radius: 20px;
}

form input,
button {
  margin-top: 5%;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button {
  background-color: rgb(14, 79, 14);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: rgb(9, 58, 9);
}

.error-message {
  color: red;
  margin-top: 10px;
}

.logged-in-section {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.user-card {
  background-color: beige;
  border: 2px solid rgb(14, 79, 14);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
}

.user-info {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
}

.user-picture img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.user-details {
  text-align: left;
}

.logout-btn,
.delete-btn {
  margin-top: 20px;
  margin-right: 10px;

}

.delete-btn {
  background-color: #f54c4c;
}
</style>