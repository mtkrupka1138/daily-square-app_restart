import React, { Component } from 'react';

class Form extends Component {

    render() {

        return (

            <form>
                <label for="toggle-example" class="flex relative items-center mb-4 cursor-pointer">
                    <input type="checkbox" id="toggle-example" class="sr-only" />
                    <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
                </label>

                <label for="toggle-example-checked" class="flex relative items-center mb-4 cursor-pointer">
                    <input type="checkbox" id="toggle-example-checked" class="sr-only" checked />
                    <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me (checked)</span>
                </label>

                <label for="toggle-example-disabled" class="flex relative items-center mb-4 cursor-not-allowed">
                    <input type="checkbox" id="toggle-example-disabled" class="sr-only" disabled />
                    <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-600">Toggle me (disabled)</span>
                </label>
            </form>
    
        )
        
    }
    
}

export default Form;