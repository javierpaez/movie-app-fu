# System Verification Testing Document

This guide is for non-technical individuals to verify the functionality of the Movie App (movie-app-fu). Follow these step-by-step instructions to manually test the major workflows of the app.

---

## 1. **Login Test**

### **Success Case:**

a. The user navigates to the **Login Page**.

b. The user enters a valid **Username** (e.g., `validuser@example.com`).

c. The user enters the correct **Password** (e.g., `ValidPassword123`).

d. The user clicks the **Login** button.

e. The user is redirected to the **Home Page**, and the username appears in the top-right corner indicating that the user is successfully logged in.

---

### **Failure Case:**

a. The user navigates to the **Login Page**.

b. The user enters an invalid **Username** (e.g., `invaliduser@example.com`).

c. The user enters an incorrect **Password** (e.g., `WrongPassword123`).

d. The user clicks the **Login** button.

e. An error message appears on the screen indicating "Invalid username or password."

f. The user is not redirected to the **Home Page**, and the login page remains visible with the option to retry.

---

## 2. **Search Test**

### **Success Case:**

a. The user navigates to the **Home Page**.

b. The user clicks the **Search Bar** at the top of the page.

c. The user types a movie title, for example, "Inception".

d. The user presses **Enter** or clicks the **Search Button**.

e. A list of movie results related to "Inception" is displayed.

f. The user clicks on the first movie result.

g. The user is redirected to the **Movie Details Page** for "Inception" with relevant information like the movie poster, description, and cast.

---

### **Failure Case:**

a. The user navigates to the **Home Page**.

b. The user clicks the **Search Bar** at the top of the page.

c. The user types an incorrect movie title, for example, "InexistentMovie".

d. The user presses **Enter** or clicks the **Search Button**.

e. A message is displayed: "No results found for 'InexistentMovie'."

---

## 3. **Movie Details Page Test**

### **Success Case:**

a. The user navigates to the **Home Page**.

b. The user clicks on a movie from the list (e.g., "The Dark Knight").

c. The user is redirected to the **Movie Details Page**.

d. The page displays the movie's **Title**, **Poster**, **Release Date**, **Rating**, **Cast**, and **Description**.

e. The user is able to click the **Play Trailer** button and the trailer video starts playing.

---

### **Failure Case:**

a. The user navigates to the **Home Page**.

b. The user clicks on a movie from the list (e.g., "Some Missing Movie").

c. The user is redirected to the **Movie Details Page**.

d. The page displays a **404 Error** or shows a broken poster with a message saying, "Movie not found" or "Data missing."

---

## 4. **Add Movie to Favorites Test**

### **Success Case:**

a. The user is logged in and navigates to the **Home Page**.

b. The user clicks on the heart icon (**Favorite Button**) next to a movie (e.g., "The Matrix").

c. A confirmation message appears saying, "Movie added to favorites."

d. The movie is now displayed in the **Favorites Section** under the user profile.

---

### **Failure Case:**

a. The user is not logged in and navigates to the **Home Page**.

b. The user clicks on the heart icon (**Favorite Button**) next to a movie (e.g., "Avatar").

c. A message appears saying, "Please log in to add movies to your favorites."

d. The user is redirected to the **Login Page**.

---

## 5. **Logout Test**

### **Success Case:**

a. The user is logged in and navigates to the **Home Page**.

b. The user clicks on the **Profile Icon** in the top-right corner.

c. The user selects the **Logout** option from the dropdown menu.

d. The user is redirected to the **Login Page**.

e. A confirmation message may appear saying, "You have been logged out."

---

### **Failure Case:**

a. The user navigates to the **Home Page** while already logged out.

b. The **Login** button is visible in the top-right corner.

c. The user is unable to access any user-specific actions (e.g., Favorites, Profile), and is prompted to log in.

---

## 6. **Pagination Test (Movie List)**

### **Success Case:**

a. The user navigates to the **Home Page** and sees the list of movies.

b. The user scrolls down or clicks on the **Next Page** button.

c. The list updates with the next set of movies (e.g., movies 21–40).

d. The user can continue to navigate between pages.

---

### **Failure Case:**

a. The user reaches the last page of the movie list.

b. The **Next Page** button is disabled or hidden.

c. The user is not able to click **Next Page** to load additional content.

---

## 7. **Responsive Design Test**

### **Success Case:**

a. The user accesses the app on a desktop device and the layout appears correctly.

b. The user resizes the window to a smaller size (e.g., tablet or mobile view).

c. The app's layout adjusts accordingly, with a responsive menu, larger buttons, and easy navigation.

d. All functionalities, such as search and movie details, work as expected on different screen sizes.

---

### **Failure Case:**

a. The user accesses the app on a mobile device.

b. The layout does not adjust properly and certain elements (e.g., buttons, search bar) are cut off or misplaced.

c. Some features are inaccessible, or the interface is not user-friendly on smaller screens.

---

## 8. **Error Handling Test (Network Failure)**

### **Failure Case:**

a. The user is logged in and tries to search for a movie or add it to favorites.

b. The network connection is intentionally disabled (e.g., Wi-Fi off or airplane mode).

c. An error message appears saying, "Network connection lost. Please try again."

d. The user is able to retry once the connection is restored.

---

## 9. **Profile Update Test**

### **Success Case:**

a. The user navigates to the **Profile Page**.

b. The user clicks on the **Edit Profile** button.

c. The user updates their name, email, and/or password.

d. The user clicks the **Save** button.

e. A success message appears: "Profile updated successfully."

f. The updated profile information is displayed on the **Profile Page**.

---

### **Failure Case:**

a. The user navigates to the **Profile Page**.

b. The user clicks on the **Edit Profile** button.

c. The user enters an invalid email or password (e.g., "invalid email").

d. The user clicks the **Save** button.

e. An error message appears: "Invalid email format. Please check your details."
