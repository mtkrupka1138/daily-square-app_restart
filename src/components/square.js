import React from "react";

export default function Square(props) {

    return (

        <div className="relative min-h-screen flex items-center justify-center bg-bluesgrays-50 py-12 px-4 sm:px-6 lg:px-8 relative items-center">
                <div className="space-y-8 p-10 bg-bluesgrays-100 rounded-xl z-10">
                    <form method="POST">
                        <div class="square-container">
                            <div class="square-item" id="square1">
                                <div class="inside-square-item"  title="for input"></div>
                            </div>
                            <div class="square-item" id="square2">
                                <div class="dropdown show inside-square-item" title="for input" >
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected></option>
                                        <option value="happy">&#128513</option>
                                        <option value="love">&#128525</option>
                                        <option value="meh">&#128529</option>
                                    </select>
                                </div>
                            </div>
                            <div class="square-item" id="square3">
                                <div class="dropdown show inside-square-item" title="for input" >
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected></option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="square-item" id="square4">
                                <div class="dropdown show inside-square-item" title="for input" >
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected></option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="square-item" id="square5">
                                <div class="inside-square-item" title="for input" ></div>
                            </div>
                            <div class="square-item" id="square6">
                                <div class="inside-square-item" title="for input" ></div>
                            </div>
                            <div class="square-item" id="square7">
                                <div class="inside-square-item" title="for input" ></div>
                            </div>
                            <div class="square-item" id="square8">
                                <div class="inside-square-item" title="for input" ></div>
                            </div>
                            <div class="square-item" id="square9">
                                <div class="inside-square-item" title="for input" ></div>
                            </div>
                            <div class="square-item" id="square10">
                                <div class="inside-square-item" title="for input" ></div>
                            </div>
                            <div class="square-item" id="square11">
                                <div class="inside-square-item" title="for input" ></div>
                            </div>
                            <div class="square-item" id="square12">
                                <div class="inside-square-item" title="for input" ></div>
                            </div>
                            <div class="square-item" id="square13">
                                <div class="inside-square-item" title="for input" ></div>
                            </div>
                            <div class="square-item" id="square14">
                                <div class="inside-square-item" title="for input" >
                                    <input type="textarea" placeholder="type here" />
                                </div>
                            </div>
                            <div class="square-item" id="square15">
                                <div class="inside-square-item" title="for input" ></div>
                            </div>
                            <div class="square-item" id="square16">
                                <div class="inside-square-item" title="for input" ></div>
                            </div>
                            <div class="main-square" id="main-square">
                                <div class="inner-square"></div>
                                <input type="textarea" placeholder="What defined your day?" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

    )

}