<template>
    <div>
      <form class="container" @submit.prevent="submitForm">
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" required>
        </div>
        <br>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>  
        </div>
        <br>
        <div>
            <label for="Phone">Phone:</label>
            <input type="text" id="phone" v-model="phone" required>
        </div>
        <br>
        <div>
            <label for="Address">Address:</label>
            <input type="text" id="address" v-model="address" required>
        </div>
        <br>
        <div class="horizontal">
           <button class="btn" type="submit">Submit</button>
           <button type="button" @click="closeForm">Cancel</button> 
        </div>
        
      </form>
    </div>
  </template>
  
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      address: ''
    };
  },
  methods: {
    async submitForm() {
  const formData = {
    name: this.name,
    email: this.email,
    phone: this.phone,
    address: this.address
  };

  const params = new URLSearchParams(formData).toString();
  const url = `https://script.google.com/macros/s/AKfycbwn8vy770xneGhG4V1CoXKSWAJcESjujPTE2qDLhUaBRRJuFSkqaUMobPXJ1Xe-cKhErA/exec?${params}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      // Optionally, show a success message to the user
    } else {
      throw new Error('Failed to submit form');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    // Optionally, show an error message to the user
  }
},
    closeForm() {
      this.$emit('closeForm');
    }
  }
};
</script>
  
<style>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
}

.horizontal {
    display: grid;
}

.btn {
    margin-top: 10px;
    margin-bottom: 10px;
}
  
</style>

  