
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    // this.element;
    this.element = element;

    // Get the custom data attribute on the Link
    // this.data;
    this.data = element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    this.itemElement = document.querySelector(`.tabs[data-tab='${this.data}']`);

    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.tabItem = new TabItem(this.tabItem);

    // Add a click event listener on this instance, calling the select method on click
    element.addEventListener('click', () => this.select());

  };

  select() {
    // Get all of the elements with the tabs-link class
    // const links;
    const links = document.querySelector('.tabs-link');
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();
    Array.from(links).forEach( links => links.remove('tabs-link-selected'));

    // Add a class named "tabs-link-selected" to this link
    // this.element;
    this.element.classList.add('.tabs-link-selected');
    // Call the select method on the item associated with this link
    this.data.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;
    const items = document.querySelectorAll('.tabs-item');
    // Remove the class "tabs-item-selected" from each element
    
    // Add a class named "tabs-item-selected" to this element
    //this.element;
    this.element = document.querySelector('.tabs-item-selected')
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll(".tabs-link").forEach(link => new TabLink(link));