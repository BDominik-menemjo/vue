<script setup>
import { ref } from 'vue';
import axios from 'axios';
const crudApi = "https://reeldev.hu/api/67b58345cab89993401111/randomuser";
const randomUserApi = "https://randomuser.me/api/";

const userDatas = ref([]);
const name = ref();
const email = ref();
const phone = ref();
const editUser = ref();

const insertRandomUser = async (name_, email_, country_, phone_, city_, postcode_, street_, state_, picture_, username_, password_, salt_, sha1_) => {
  await axios.post(crudApi, {
    name: name_,
    email: email_,
    country: country_,
    phone: phone_,
    city: city_,
    postcode: postcode_,
    street: street_,
    state: state_,
    picture: picture_,
    username: username_,
    password: password_,
    salt: salt_,
    sha1: sha1_
  })
    .then(response => {
      //alert("Sikeres feltöltés!");
    })
    .catch(error => {
      console.error("Error: " + error)
    })
}


const getRandomUsers = async (n) => {
  for (var i = 0; i < n; i++) {
    await axios.get(randomUserApi)
      .then(response => {
        var name_ = (response.data.results[0].name.title + " " + response.data.results[0].name.first + " " + response.data.results[0].name.last).trim();
        var email_ = response.data.results[0].email;
        var country_ = response.data.results[0].location.country;
        var phone_ = response.data.results[0].phone;
        var city_ = response.data.results[0].location.city;
        var postcode_ = response.data.results[0].location.postcode;
        var street_ = response.data.results[0].location.street.name + " " + response.data.results[0].location.street.number;
        var state_ = response.data.results[0].location.state;
        var picture_ = response.data.results[0].picture.medium;
        var username_ = response.data.results[0].login.username;
        var password_ = response.data.results[0].login.password;
        var salt_ = response.data.results[0].login.salt;
        var sha1_ = response.data.results[0].login.sha1;
        insertRandomUser(name_, email_, country_, phone_, city_, postcode_, street_, state_, picture_, username_, password_, salt_, sha1_);
      })
      .catch(error => {
        console.error("Error: " + error)
      })
  }
}
//getRandomUsers(100);

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
      })
      .catch(error => {
        console.error("Error: " + error);
      })
  }
}

const editRandomUser = async (data) => {
  name.value = data.name;
  email.value = data.email;
  phone.value = data.phone;
  editUser.value = data;
}

const updateUserData = async () => {
  editUser.value.name = name.value;
  editUser.value.email = email.value;
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


</script>

<template>
  <main>
    <section>
      <h2 class="text-center">Random User adatok</h2>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Phone</th>
            <th scope="col">Country</th>
            <th scope="col">Address</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, i) in userDatas">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ data.name }}</td>
            <td>{{ data.email }}</td>
            <td>{{ data.phone }}</td>
            <td>{{ data.country }}</td>
            <td>{{ data.postcode }} {{ data.city }}, {{ data.street }}</td>
            <td><span data-bs-toggle="modal" data-bs-target="#exampleModal" @click="editRandomUser(data)">Edit </span>
              <span @click="deleteUser(data.id)">Delete</span></td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Edit user</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body bg-dark text-white">
          <div class="mb-3">
            <input type="text" v-model="name" class="form-control">
          </div>
          <div class="mb-3">
            <input type="text" v-model="email" class="form-control">
          </div>
          <div class="mb-3">
            <input type="text" v-model="phone" class="form-control">
          </div>
        </div>
        <div class="modal-footer bg-dark text-white">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="updateUserData()" data-bs-dismiss="modal">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>