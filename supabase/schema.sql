create table if not exists public.intake_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text not null,
  business_name text not null,
  business_type text not null,
  website text,
  bookkeeping_software text not null,
  current_bookkeeping_status text not null,
  bookkeeping_challenges text not null,
  books_up_to_date text not null,
  services_needed text[] not null default '{}',
  communication_preference text not null,
  additional_notes text,
  status text not null default 'new'
    check (status in ('new', 'contacted', 'qualified', 'closed'))
);

alter table public.intake_submissions enable row level security;

revoke all on public.intake_submissions from anon, authenticated;
