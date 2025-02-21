import { redis } from '../redis/client'

interface AccessccessInviteLinkParams {
  subscriberId: string
}

export async function accessInviteLink({
  subscriberId,
}: AccessccessInviteLinkParams) {
  await redis.hincrby('referral:access-count', subscriberId, 1)
}
