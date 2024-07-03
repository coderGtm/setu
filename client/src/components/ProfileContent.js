import React, {useState} from 'react';
import axios from "axios";
import "../assets/styles/main.css";
import "../assets/styles/responsive.css";


import {
  Card,
  Col,
  Row,
  Typography,
  Input,
  Button,
} from "antd";



function ProfileContent() {
    const { Title } = Typography;  
    const token = localStorage.getItem("authToken");
    const headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token || ""
    };
  
  
    return (
      <>
        <div class="container my-5">
        <h2>Update Username</h2>
        <form id="updateUsernameForm" action="javascript:updateUsername()">
            <div class="mb-3">
              <label for="username" class="form-label">Enter New Username</label>
              <input type="text" class="form-control" id="username" aria-describedby="usernameHelp" />
              <div id="usernameHelp" class="form-text">Username must be unique.</div>
            </div>
            <button type="submit" class="btn btn-primary">Update</button>
          </form>
    </div>

    
    <div class="container my-5">
        <h2>Update Password</h2>
        <form id="updatePasswordForm" action="javascript:updatePassword()">
            <div class="mb-3">
              <label for="password1" class="form-label">Enter New Password</label>
              <input type="password" class="form-control" id="password1" />
            </div>
            <div class="mb-3">
                <label for="password2" class="form-label">Repeat New Password</label>
                <input type="password" class="form-control" id="password2" />
              </div>
            <button type="submit" class="btn btn-primary">Update</button>
          </form>
    </div>

    
    <div class="container my-5">
        <h2>Delete Account</h2>
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete-account-modal">Delete Account</button>
    </div>

    
    <div class="modal fade" id="delete-account-modal" tabindex="-1" aria-labelledby="delete-account-modal-label" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
                <h5>Are you sure you want to delete your account? All your apps and releases will also be deleted permanently. <strong>This action is irreversible!</strong></h5>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" onclick="deleteAccount()">Delete</button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}

export default ProfileContent;