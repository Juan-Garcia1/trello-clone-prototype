import React, { Component } from "react";

import ListForm from "./ListForm";
import Card from "../Card/Card";
import CardForm from "../Card/CardForm";

class List extends Component {
  state = {
    // listName: this.props.name,
    submittedListName: false,
    editListName: false,
    cards: [],
    toggleCardInput: false,
    cardInputVal: ""
  };

  // LIST
  // handleListNameChange = e => {
  //   this.setState({
  //     listName: e.target.value
  //   });
  // };

  handleSubmitListName = e => {
    // prevent form from submitting
    e.preventDefault();
    const { name } = this.props;
    // if value is empty, alert user
    if (!name) {
      alert("Please name your list");
    } else {
      this.setState({
        submittedListName: true,
        editListName: false
      });
    }

    // const { listName } = this.state;
    // if value is empty, alert user
    // if (!listName) {
    //   alert("Please name your list");
    // } else {
    //   this.setState({
    //     submittedListName: true,
    //     editListName: false
    //   });
    // }
  };

  handleEditListName = () => {
    this.setState({
      submittedListName: false,
      editListName: true
    });
  };

  // CARD
  handleToggleCardInput = () => {
    const { toggleCardInput } = this.state;
    this.setState({
      toggleCardInput: !toggleCardInput
    });
  };
  handleCardInputValChange = e => {
    this.setState({
      cardInputVal: e.target.value
    });
  };
  handleSubmitCardInput = e => {
    e.preventDefault();
    const { cardInputVal, cards } = this.state;
    // if cardInputVal is empty, alert user
    if (!cardInputVal) {
      alert("Please add a card");
    } else {
      // cards.unshift({ id: new Date(), text: cardInputVal })
      const newCard = [{ id: new Date(), text: cardInputVal }, ...cards];
      this.setState({
        cards: newCard,
        cardInputVal: "",
        toggleCardInput: false
      });
    }
  };

  deleteCard = id => {
    const { cards } = this.state;
    const filteredCards = cards.filter(card => card.id !== id);
    this.setState({
      cards: filteredCards
    });
    // console.log(id)
  };

  render() {
    const {
      // listName,
      submittedListName,
      editListName,
      cards,
      toggleCardInput,
      cardInputVal
    } = this.state;

    const { id, deleteList, name, editName } = this.props;

    return (
      <div className="list">
        <div className="list--name">
          {// If form is not submitted or edit is false, show form. Else, display name of list
          !submittedListName || editListName ? (
            <ListForm
              // listName={listName}
              id={id}
              listName={name}
              editName={editName}
              editListName={editListName}
              // handleListNameChange={this.handleListNameChange}
              handleSubmitListName={this.handleSubmitListName}
            />
          ) : (
            <h3 onClick={this.handleEditListName} style={{ cursor: "pointer" }}>
              {/* {listName} */}
              {name}
            </h3>
          )}
        </div>

        <button className="list--delete" onClick={() => deleteList(id)}>
          X
        </button>

        {// when user adds a name to the list, show the list of cards
        // submittedListName &&
        // if the cards array is not empty, map(loop) over it
        cards.length ? (
          <div className="card">
            <ul className="card--list">
              {cards.map(card => (
                <Card key={card.id} {...card} deleteCard={this.deleteCard} />
              ))}
            </ul>
          </div>
        ) : (
          // if it's empty, show nothing
          ""
        )}

        {// if toggleCardInput is false and submittedListName is true, show user text to "add a card" to the list
        !toggleCardInput && submittedListName && (
          <p
            className="card--add"
            style={{ cursor: "pointer" }}
            onClick={this.handleToggleCardInput}
          >
            + <span>Add a card...</span>
          </p>
        )}
        {// if toggleCardInput is true show form
        toggleCardInput && (
          <CardForm
            handleCardInputValChange={this.handleCardInputValChange}
            handleSubmitCardInput={this.handleSubmitCardInput}
            handleToggleCardInput={this.handleToggleCardInput}
            cardInputVal={cardInputVal}
          />
        )}
      </div>
    );
  }
}

export default List;
