package com.neo.security.repository;



import org.springframework.data.jpa.repository.JpaRepository;


import com.neo.security.entity.Income;


public interface IncomeRepo extends JpaRepository<Income,Integer>{

//
//	@Query("SELECT i FROM Income i")
//	    public List<Income> getAllIncome();
//	
//	 
//	@Query("SELECT i FROM Income i WHERE i.incomeId = :incomeId")
//	 	public Income getByIncomeId(@Param("incomeId") int incomeId);
//	
//	@Query("UPDATE Income i SET i.incomeSource = :incomeSource, i.incomeAmount = :incomeAmount, i.incomeDesc = :incomeDesc, i.incomeDesc:incomeDesc i. WHERE i.incomeId = :incomeId")
//    @Modifying
//    @Transactional
//    public void updateIncomeById(@Param("incomeSource") String source, @Param("incomeAmount") double amount, @Param("incomDesc") String incomeDesc, @Param("incomeDate") String incomeDate);
//	
//	
//	@Query("DELETE FROM Income i WHERE i.incomeId = :incomeId")
//    @Modifying
//    @Transactional
//    public void deleteByIncomeId(@Param("incomeId") int incomeId);
}

