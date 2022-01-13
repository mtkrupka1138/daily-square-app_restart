// import React, { Component } from 'react';
// import { useState } from 'react';

function SquareSingle() {

        return (
                        <form method="POST">
                            <div class="square-container">
                                <div class="square-item" id="square1">
                                    <div class="inside-square-item" data-toggle="tooltip" data-placement="top" title="for input"></div>
                                </div>
                                <div class="square-item" id="square2">
                                    <div class="dropdown show inside-square-item" data-toggle="tooltip" data-placement="top" title="for input" >
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected></option>
                                            <option value="happy">&#128513</option>
                                            <option value="love">&#128525</option>
                                            <option value="meh">&#128529</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="square-item" id="square3">
                                    <div class="dropdown show inside-square-item" data-toggle="tooltip" data-placement="top" title="for input" >
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected></option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="square-item" id="square4">
                                    <div class="dropdown show inside-square-item" data-toggle="tooltip" data-placement="top" title="for input" >
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected></option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="square-item" id="square5">
                                    <div class="inside-square-item" data-toggle="tooltip" data-placement="top" title="for input" ></div>
                                </div>
                                <div class="square-item" id="square6">
                                    <div class="inside-square-item" data-toggle="tooltip" data-placement="left" title="for input" ></div>
                                </div>
                                <div class="square-item" id="square7">
                                    <div class="inside-square-item" data-toggle="tooltip" data-placement="right" title="for input" ></div>
                                </div>
                                <div class="square-item" id="square8">
                                    <div class="inside-square-item" data-toggle="tooltip" data-placement="left" title="for input" ></div>
                                </div>
                                <div class="square-item" id="square9">
                                    <div class="inside-square-item" data-toggle="tooltip" data-placement="right" title="for input" ></div>
                                </div>
                                <div class="square-item" id="square10">
                                    <div class="inside-square-item" data-toggle="tooltip" data-placement="left" title="for input" ></div>
                                </div>
                                <div class="square-item" id="square11">
                                    <div class="inside-square-item" data-toggle="tooltip" data-placement="right" title="for input" ></div>
                                </div>
                                <div class="square-item" id="square12">
                                    <div class="inside-square-item" data-toggle="tooltip" data-placement="left" title="for input" ></div>
                                </div>
                                <div class="square-item" id="square13">
                                    <div class="inside-square-item" data-toggle="tooltip" data-placement="bottom" title="for input" ></div>
                                </div>
                                <div class="square-item" id="square14">
                                    <div class="inside-square-item" data-toggle="tooltip" data-placement="bottom" title="for input" >
                                        <input type="textarea" placeholder="type here" />
                                    </div>
                                </div>
                                <div class="square-item" id="square15">
                                    <div class="inside-square-item" data-toggle="tooltip" data-placement="bottom" title="for input" ></div>
                                </div>
                                <div class="square-item" id="square16">
                                    <div class="inside-square-item" data-toggle="tooltip" data-placement="right" title="for input" ></div>
                                </div>
                                <div class="main-square" id="main-square">
                                    <div class="inner-square"></div>
                                    <input type="textarea" placeholder="What defined your day?" />
                                </div>
                            </div>
                            <button>
                                Add Square
                            </button>
                        </form>
        )
}



export default SquareSingle;