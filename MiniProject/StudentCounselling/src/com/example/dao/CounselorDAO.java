package com.example.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.example.entity.Counselor;
import com.example.interfc.CounselorInterface;
import com.example.util.DBConnection;

public class CounselorDAO implements CounselorInterface {
    public Counselor getCounselorById(int counselorId) {
        Counselor counselor = null;
        String query = "SELECT * FROM counselors WHERE counselorId = ?";
        try (Connection connection = DBConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, counselorId);
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    String name = resultSet.getString("counselorName");
                    String email = resultSet.getString("counselorEmail");
                    counselor = new Counselor(counselorId, name, email);
                }
            }
            connection.close();
        } 
        catch (SQLException e) {
            e.printStackTrace();
        }
        return counselor;
    }

    public void saveOrUpdateCounselor(Counselor counselor) {
        String query;
        if (counselor.getCounselorId() == 0) {
            query = "INSERT INTO counselors (counselorName, counselorEmail) VALUES (?, ?)";
        } else {
            query = "UPDATE counselors SET counselorName = ?, counselorEmail = ? WHERE counselorId = ?";
        }

        try (Connection connection = DBConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, counselor.getCounselorName());
            statement.setString(2, counselor.getCounselorEmail());

            if (counselor.getCounselorId() != 0) {
                statement.setInt(3, counselor.getCounselorId());
            }

            statement.executeUpdate();
            connection.close();
        } 
        catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void deleteCounselor(int counselorId) {
        String query = "DELETE FROM counselors WHERE counselorId = ?";
        try (Connection connection = DBConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, counselorId);
            statement.executeUpdate();
            connection.close();
        } 
        catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public List<Counselor> getAllCounselors() {
        List<Counselor> counselors = new ArrayList<>();
        String query = "SELECT * FROM counselors";
        try (Connection connection = DBConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(query);
             ResultSet resultSet = statement.executeQuery()) {
            while (resultSet.next()) {
                int id = resultSet.getInt("counselorId");
                String name = resultSet.getString("counselorName");
                String email = resultSet.getString("counselorEmail");
                counselors.add(new Counselor(id, name, email));
            }
            connection.close();
        }
        catch (SQLException e) {
            e.printStackTrace();
        }
        return counselors;
    }

    public List<Counselor> getAvailableCounselors(String day, String slot) {
        List<Counselor> availableCounselors = new ArrayList<>();
        String query = "SELECT * FROM counselors WHERE counselorId NOT IN (SELECT counselorId FROM appointments WHERE appointmentDay = ? AND appointmentSlot = ?)";
        try (Connection connection = DBConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, day);
            statement.setString(2, slot);
            try (ResultSet resultSet = statement.executeQuery()) {
                while (resultSet.next()) {
                    int id = resultSet.getInt("counselorId");
                    String name = resultSet.getString("counselorName");
                    String email = resultSet.getString("counselorEmail");
                    availableCounselors.add(new Counselor(id, name, email));
                }
            }
            connection.close();
        } 
        catch (SQLException e) {
            e.printStackTrace();
        }
        return availableCounselors;
    }
}
