<script setup lang="ts">
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
  <nav class="h-16 border-b bg-muted/40 flex justify-between items-center px-6">
    <form class="w-full max-w-96 relative h-fit">
      <iconify-icon class="absolute top-[50%] translate-y-[-50%] left-2.5 text-muted-foreground" icon="lucide:search"></iconify-icon>
      <Input class="w-full bg-background pl-8" type="text" placeholder="Search..." />
    </form>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <!--          <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />-->
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
