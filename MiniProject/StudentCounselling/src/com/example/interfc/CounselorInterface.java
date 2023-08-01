package com.example.interfc;

import java.util.List;

import com.example.entity.Counselor;

public abstract interface CounselorInterface {
	public abstract void saveOrUpdateCounselor(Counselor counselor);
	public abstract void deleteCounselor(int counselorId);
	public abstract List<Counselor> getAllCounselors();
	public abstract Counselor getCounselorById(int counselorId);
	public abstract List<Counselor> getAvailableCounselors(String day, String slot);

}
