'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/all-tasks');
  }, [router]);

  return null; // or a loading spinner
}