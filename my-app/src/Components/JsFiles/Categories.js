import React from "react";

function Categories() {
    const FoodandTechnology="Food and Technology";
    const MachanicalItems="Machanical Items";
    const Techtools="Tech tools";
    const MedicalThings="Medical Things";
    const Mediathings="Media things";
    return (
        <div className="caters">
            <form>
                <h1>Categories</h1>
                <legend>Choose your category:</legend>
                <h1 align="center">categories</h1>
                    <a href="FoodandTechnology">FoodandTechnology</a><br></br>
                    <a href="MachanicalItems">MachanicalItems</a><br></br>
                    <a href="Techtools">Techtools</a><br></br>
                    <a href="MedicalThings">MedicalThings</a><br></br>
                    <a href="Mediathings">Mediathings</a><br></br>
            </form>


        </div>
    )


}

export default Categories;