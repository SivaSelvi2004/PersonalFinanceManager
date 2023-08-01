package com.example.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.example.entity.Student;
import com.example.interfc.StudentInterface;
import com.example.util.DBConnection;

public  class StudentDAO implements StudentInterface{
    public Student getStudentById(int studentId) {
        Student student = null;
        String query = "SELECT * FROM students WHERE studentId = ?";
        try (Connection connection = DBConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, studentId);
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    String name = resultSet.getString("studentName");
                    String email = resultSet.getString("studentEmail");
                    student = new Student(studentId, name, email);
                }
            }
            connection.close();
        } 
        catch (SQLException e) {
            e.printStackTrace();
        }
        return student;
    }

    public void saveOrUpdateStudent(Student student) {
        String query;
        if (student.getStudentId() == 0) {
            query = "INSERT INTO students (studentName, studentEmail) VALUES (?, ?)";
        } else {
            query = "UPDATE students SET studentName = ?, studentEmail = ? WHERE studentId = ?";
        }

        try (Connection connection = DBConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, student.getStudentName());
            statement.setString(2, student.getStudentEmail());

            if (student.getStudentId() != 0) {
                statement.setInt(3, student.getStudentId());
            }

            statement.executeUpdate();
            connection.close();
        } 
        catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void deleteStudent(int studentId) {
        String query = "DELETE FROM students WHERE studentId = ?";
        try (Connection connection = DBConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, studentId);
            statement.executeUpdate();
            connection.close();
        } 
        catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public List<Student> getAllStudents() {
        List<Student> students = new ArrayList<>();
        String query = "SELECT * FROM students";
        try (Connection connection = DBConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(query);
             ResultSet resultSet = statement.executeQuery()) {
            while (resultSet.next()) {
                int id = resultSet.getInt("studentId");
                String name = resultSet.getString("studentName");
                String email = resultSet.getString("studentEmail");
                students.add(new Student(id, name, email));
            }
            connection.close();
        } 
        catch (SQLException e) {
            e.printStackTrace();
        }
        return students;
    }
}
