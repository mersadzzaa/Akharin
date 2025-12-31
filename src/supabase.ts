import { createClient } from "@supabase/supabase-js";

// ------------------------------------------------------------------
// اطلاعات Supabase خود را در اینجا جایگزین کنید
// به داشبورد Supabase بروید -> Settings -> API
// ------------------------------------------------------------------

const supabaseUrl = "https://xnhtfdcqzhrmxipgizoq.supabase.co"; // مثال: https://xyz.supabase.co
const supabaseKey = "sb_publishable_4Qolzb9gVF_50MyLIz2KfQ_6w9yJkZ0"; // کلید عمومی (anon public)

export const supabase = createClient(supabaseUrl, supabaseKey, {
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});
